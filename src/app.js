let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let purchase = document.querySelector("#purchase-btn");
let purchaseS = document.querySelector("#purchaseSp-btn");
let purchaseE = document.querySelector("#purchaseED-btn");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
};
/*coke*/
function purChase() {
  let name = prompt("what is your name?");
  let address = prompt("what is your preferred delivery address?");
  let number = prompt("what is your phone number?");
  let payment = prompt(
    "what is your perferred payment option.Reply 1 for payment on delivery,Reply 2 for payment options"
  );
  if (payment >= 2) {
    alert(
      ` Dear ${name},please kindly make a payment of #200 to this account number,000567890.the product would be delivered to this ${address} as soon as payment is confirmed`
    );
  } else {
    if (name == 0 || address === 0 || number === 0 || payment === 0) {
      alert("please,input your current details");
    } else {
      alert(
        `dear ${name}, stadium coke would be sent to ${address} within 48 hours,Thanks for your patronage`
      );
    }
  }
}
purchase.addEventListener("click", purChase);
/*sprite*/
function purChaseSp() {
  let name = prompt("what is your name?");
  let address = prompt("what is your preferred delivery address?");
  let number = prompt("what is your phone number?");
  let payment = prompt(
    "what is your perferred payment option.Reply 1 for payment on delivery,Reply 2 for payment options"
  );
  if (payment >= 2) {
    alert(
      ` Dear ${name},please kindly make a payment of #200 to this account number,000567890.the product would be delivered to this ${address} as soon as payment is confirmed`
    );
  } else {
    if (name == 0 || address === 0 || number === 0 || payment === 0) {
      alert("please,input your current details");
    } else {
      alert(
        `dear ${name}, stadium sprite would be sent to ${address} within 48 hours,Thanks for your patronage`
      );
    }
  }
}
purchaseS.addEventListener("click", purChaseSp);

/*energy drink*/
function purChaseED() {
  let name = prompt("what is your name?");
  let address = prompt("what is your preferred delivery address?");
  let number = prompt("what is your phone number?");
  let payment = prompt(
    "what is your perferred payment option.Reply 1 for payment on delivery,Reply 2 for payment options"
  );
  if (payment >= 2) {
    alert(
      ` Dear ${name},please kindly make a payment of #200 to this account number,000567890.the product would be delivered to this ${address} as soon as payment is confirmed`
    );
  } else {
    if (name == 0 || address === 0 || number === 0 || payment === 0) {
      alert("please,input your current details");
    } else {
      alert(
        `dear ${name}, stadium Energy drink would be sent to ${address} within 48 hours,Thanks for your patronage`
      );
    }
  }
}
purchaseE.addEventListener("click", purChaseED);
