const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.modal')
const modalContainer = document.querySelector('.js-modal-container')
const modalClose = document.querySelector('.js-modal-close')
    //  hàm hiển thị
function showBuyTickets() {
    modal.classList.add('open')
}
//  hàm ẩn
function hideBuyStickets() {
    modal.classList.remove('open')
}
// có thể lắng nghe code của người dùng duyệt từng nút bấm

for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTickets)
}
//bấm vào ẩn đi

modalClose.addEventListener('click', hideBuyStickets)
modal.addEventListener('click', hideBuyStickets)
modalContainer.addEventListener('click', function(event) {
        event.stopPropagation()
    })
    // đóng mở menu

// đóng mở mobile menu
var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');
var headerHeight = header.clientHeight;
// lưu biến để tùy chỉnh
mobileMenu.onclick = function() {
        // === so sánh 2 vế vói  1 số trong jvs
        var isClosed = header.clientHeight === headerHeight;
        // nếu đang đóng bấm =>auto(mở ) và ngược lại 
        if (isClosed) {
            header.style.height = 'auto';
        } else {
            header.style.height = null;

        }
    }
    // tự động đóng khi chọn
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    menuItem.onclick = function(event) {
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');

        if (isParentMenu) {
            event.preventDefault();

        } else {
            header.style.height = null;
        }
    }
}