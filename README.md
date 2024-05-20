# Website Theo Dõi Dân Số Thế Giới

## Tác Giả
- **Hoàng Mạnh Tiến**
- **MSSV**: K205480106025
- **Đề Tài**: Website Theo Dõi Dân Số Thế Giới

## Nội Dung
### Mục Tiêu
- Xây dựng trang web hiển thị top 5 nước có dân số cao nhất 
- tạo biểu đồ thể hiện quá trình tăng giảm dân số.
- Tạo giao diện dễ nhìn dễ thao tác

### Các Bước Thực Hiện
1. **Thu Thập Dữ Liệu Dân Số**
    - Lấy dữ liệu từ API dân số của uy tín

2. **Xử Lý Dữ Liệu**
    - Sử dụng FastAPI để xây dựng một API lấy , xử lý và trả về dữ liệu
    - Sử dụng Node-RED lấy dữ liệu từ  api của fastAPI , sau đó lưu vào cơ sở dữ liệu.

3. **Lưu Trữ Dữ Liệu**
    - Sử dụng cơ sở dữ liệu MSSQL để lưu trữ dữ liệu dân số.
    - data bao gồm : 1 bảng dan_so : có cột id , tenquocgia , soluong , thoigian ,ghichu 

4. **Xây Dựng Trang Web**
    - Sử dụng các công nghệ front-end (HTML, CSS, JavaScript ,google chart) để xây dựng giao diện người dùng.
    - Hiển thị top 5 quốc gia có dân số cao nhất.
    - Tạo biểu đồ tương tác thể hiện quá trình tăng giảm dân số của các quốc gia qua các năm.


### Các Công Nghệ Sử Dụng
- **Backend**: FastAPI, Node-RED , APS.NET
- **Database**: MSSQL
- **Frontend**: HTML, CSS, JavaScript

### Sơ đồ hoạt động
![Tên thay thế](https://github.com/HManhTien/DansoTG/blob/master/DansoTG/sodo/sodohoatdong.png)
### Ghi Chú
- Đảm bảo rằng bạn đã cấu hình đúng API key và URL của các dịch vụ API bạn sử dụng.
- Thường xuyên kiểm tra và cập nhật dữ liệu để đảm bảo tính chính xác và kịp thời.

### Liên Hệ
- Email: k205480106025@tnut.edu.vn
- GitHub: [https://github.com/hmanhtien](https://github.com/hmanhtien)
