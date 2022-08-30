/*
Input: Nhập vào tên , tổng thu nhập năm, tiền thuế
Process: Thu nhập chịu thuế = Tổng thu nhập năm - 4tr - Số người phu thuộc * 1.6%
         Thuế phải trả bằng thu nhập chịu thuế nhân với thuế suất tùy vào mức thu nhập chịu thuế
Output:  Xuất ra số thu nhập phải nộp cho nhà nước
*/

function incomeTax(name, salary, dependentPerson) {
  var tax;
  if (salary <= 60) {
    tax = ((salary - 4 - dependentPerson * 1.6) * 5) / 100;
  } else if (salary <= 120) {
    tax = ((salary - 4 - dependentPerson * 1.6) * 10) / 100;
  } else if (salary <= 210) {
    tax = ((salary - 4 - dependentPerson * 1.6) * 15) / 100;
  } else if (salary <= 384) {
    tax = ((salary - 4 - dependentPerson * 1.6) * 20) / 100;
  } else if (salary <= 624) {
    tax = ((salary - 4 - dependentPerson * 1.6) * 25) / 100;
  } else if (salary <= 960) {
    tax = ((salary - 4 - dependentPerson * 1.6) * 30) / 100;
  } else {
    tax = ((salary - 4 - dependentPerson * 1.6) * 35) / 100;
  }
  console.log("Tên người nộp thuế", name);
  console.log("Số người phụ thuộc", dependentPerson);
  console.log("Tiền thuế phải trả là", tax);
}

incomeTax("Nguyễn Quang Bách", 120, 0);

/*--------------------HW2-----------------------*/
/*
Input: Nhập vào ô mã khách hàng, loại khách hàng, số kết nối và số kênh
Process: 1. Nếu là khách hàng cá nhân thì ko cần nhập vào số kết nối
         2. Nếu là khách hàng doanh nghiệp thì nhập vào số kết nối
         3. Nếu là khách hàng cá nhân thì hóa đơn bằng phí xử lý hóa đơn + phí dịch vụ cơ bản + 7.5 * số kênh
         4. Nếu là khách hàng doanh nghiệp thì hóa đơn bằng phí xử lý hóa đơn + 75(cho 10 kết nối đầu phí dv cơ bản và sau đó mỗi kết nối 5 dô)+ 50* số kênh
Output: Sau đó in ra màn hình tổng giá trị

*/

function check() {
  if (document.getElementById("personalCustomer").checked) {
    document.getElementById("numberConnection").disabled = true;
  } else if (document.getElementById("bussinesCustomer").checked) {
    document.getElementById("numberConnection").disabled = false;
  }
}

function calcTax() {
  var personalCustomer = document.getElementById("personalCustomer");
  var bussinesCustomer = document.getElementById("bussinesCustomer");
  var connection, channel, total;

  if (personalCustomer.checked) {
    console.log(document.getElementById("customerID").value);
    channel = +document.getElementById("numberChannel").value;
    total = 4.5 + 20.5 + 7.5 * channel;
    console.log(total);
  } else if (bussinesCustomer.checked) {
    console.log(document.getElementById("customerID").value);
    connection = +document.getElementById("numberConnection").value;
    channel = +document.getElementById("numberChannel").value;

    if (connection <= 10) {
      total = 15 + 75 + 50 * channel;
    } else {
      total = 15 + 75 + 5 * (connection - 10) + 50 * channel;
    }
    console.log(total);
  }
  document.getElementById("xuatTien").innerHTML = total;
}
