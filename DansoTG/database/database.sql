
CREATE PROCEDURE [dbo].[SP_COVID]
	-- Add the parameters for the stored procedure here
	@action nvarchar(50) ,
	@quocgia nvarchar(50) = null,
	@socamac int = null,
	@socatuvong int = null , 
	@socahoiphuc int null,
	@socahoiphuc int = null
	
AS
BEGIN
	DECLARE @json nvarchar(max) ='';	
	IF(@action ='THEM_DU_LIEU')
		BEGIN
			BEGIN
				INSERT INTO data(quoc_gia , so_ca_mac, so_ca_tu_vong , so_ca_hoi_phuc , so_ca_dang_dieu_tri ) VALUES (@quocgia  , @socamac ,
				@socatuvong  , @socahoiphuc ,@socahoiphuc )  

				SELECT @json+=FORMATMESSAGE(N'{Thêm dữ liệu thành công}')
				IF((@json is null)or(@json=''))
					SELECT N'{"ok":0,"msg":"không có dữ liệu","data":[]}' as json;
				ELSE
				  BEGIN
					SELECT @json=REPLACE(@json,'(null)','null')
					SELECT N'{"ok":1,"msg":"ok","data":['+left(@json,len(@json)-1)+']}' as json;
				  END
			END
		END 
END
