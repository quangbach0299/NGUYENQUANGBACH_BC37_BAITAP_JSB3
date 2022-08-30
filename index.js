/*------------------------------HW1----------------------------------
 *Input: Điểm chuẩn, môn 1, môn 2, môn 3, khu vực (A,B,C,X), đối tượng  (1,2,3,0);
 *
 *Process:
 *1. Lấy input (hardcore)
 *2. Tính điểm ưu tiên theo đối tượng
 *3. Tính điểm ưu tiên theo khu vực
 *4. Tính tổng điểm = môn 1, môn 2, môn 3 + điểm KV+ điểm BT
 *5. Check kêt quả, tổng điểm => điểm chuẩn và ko có môn nào = 0 => đâu
 */

function exercise1(benchmark, math, physic, chem, area, object) {
  var areaPoint = 0;
  var objectPoint = 0;

  switch (area) {
    case "A":
      areaPoint = 2;
      break;
    case "B":
      areaPoint = 1;
      break;
    case "C":
      areaPoint = 0.5;
      break;
    default:
      break;
  }

  switch (object) {
    case 1:
      objectPoint = 2.5;
      break;
    case 2:
      objectPoint = 1.5;
      break;
    case 3:
      objectPoint = 1;
      break;
    default:
      objectPoint = 0;
  }

  var total = math + physic + chem + objectPoint + areaPoint;
  console.log(total);

  if (total > benchmark && math !== 0 && physic !== 0 && chem !== 0) {
    console.log("Bạn đã đậu");
  } else {
    console.log("Bạn đã rớt");
  }
}

exercise1(22, 5, 10, 7, "A", 1);

//-------------------------------------------
/*
Input: Nhập vào tên và giá trị điện tiêu thụ
Process: Nếu giá trị tiêu thụ điện <= 50  thì tính như sau  price = value * 500;
         Nếu giái trị tính tiền điện <= 100 thì tính giá tiền điện như sau price = (value - 50) * 650 + 50 * 500;
         Nếu giái trị tính tiền điện <= 200 thì tính giá tiền điện như sau price = (value - 100) * 850 + 50 * 650 + 50 * 500;
         Nếu giái trị tính tiền điện <= 350 thì tính giá tiền điện như sau price = (value - 200) * 1100 + 100 * 850 + 50 * 650 + 50 * 500;
         Nếu giái trị tính tiền điện >= 350 thì tính giá tiền điện như sau price = (value - 350) * 1300 + 150 * 1100 + 100 * 850 + 50 * 650 + 50 * 500;
Output: Xuất ra giá trị tiền điện khách cần thanh toán
*/

var names = "Bach";
var consume = 100;
// 80 = 50 +30
// 120 = 50 + 50 + 20
// 320 = 50 + 50 + 100 + 20
// 600 = 50 + 50 + 100 + 150 + 250
function countElectric(id, value) {
  console.log("Tên Khách Hàng", id);
  var price = 0;
  if (value <= 50) {
    price = value * 500;
  } else if (value <= 100) {
    price = (value - 50) * 650 + 50 * 500;
  } else if (value <= 200) {
    price = (value - 100) * 850 + 50 * 650 + 50 * 500;
  } else if (value <= 350) {
    price = (value - 200) * 1100 + 100 * 850 + 50 * 650 + 50 * 500;
  } else {
    price = (value - 350) * 1300 + 150 * 1100 + 100 * 850 + 50 * 650 + 50 * 500;
  }

  console.log(price);
}

countElectric(names, 50);
