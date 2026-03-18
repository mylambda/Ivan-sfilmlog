// 等待页面的HTML全部加载完成后再执行脚本
document.addEventListener('DOMContentLoaded', function() {

    // 找到页面上所有的“查看大图”按钮
    const buttons = document.querySelectorAll('.view-btn');

    // 给每一个按钮都添加一个点击事件监听器
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // 当按钮被点击时，找到它所属的那个卡片（父元素的父元素）
            const card = this.closest('.card');
            // 在卡片里找到图片元素
            const img = card.querySelector('.card-image');
            // 获取图片的标题
            const title = card.querySelector('h2').innerText;

            // 弹出提示框。未来可以换成更酷的图片弹窗效果
            alert(`你点击了：${title}\n图片路径：${img.src}`);
        });
    });

});
