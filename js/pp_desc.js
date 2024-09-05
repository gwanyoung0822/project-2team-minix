document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery li');
    const textItems = document.querySelectorAll('.pp-det-txtwrap > div');

    function toggleOpen() {
        // 모든 갤러리 아이템에서 'open' 클래스 제거
        galleryItems.forEach(item => item.classList.remove('open'));

        // 모든 텍스트 아이템에서 'open-text'와 'shrink-text' 클래스 제거
        textItems.forEach(item => {
            item.classList.remove('open-text');
            item.classList.remove('shrink-text');
        });

        // 클릭된 갤러리 아이템과 해당 인덱스의 텍스트 아이템에 'open'과 'open-text' 클래스 추가
        this.classList.add('open');
        const index = Array.from(galleryItems).indexOf(this);
        if (textItems[index]) {
            textItems[index].classList.add('open-text');
        }

        // 나머지 텍스트 아이템에 'shrink-text' 클래스 추가
        textItems.forEach((item, idx) => {
            if (idx !== index) {
                item.classList.add('shrink-text');
            }
        });
    }

    galleryItems.forEach(item => item.addEventListener('click', toggleOpen));
});
