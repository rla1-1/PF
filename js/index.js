const showUps = document.querySelectorAll('.showUp');
const nav = document.querySelectorAll('.nav');

//스크롤 active 추가하는 코드가 있어서 중복으로 active가 나타나서
//네비게이션 버튼을 누르면 나머지 버튼에 active 제거하기
nav.forEach((button) => {
    button.addEventListener('click', () => {
        nav.forEach((btn) => {
            btn.classList.remove('active');
        });
        button.classList.add('active');
    });
});


//스크롤 이벤트들
window.addEventListener('scroll', () => {
    let sections = document.querySelectorAll('section');
    let sectionPosition = [];
    for (let i = 0; i < sections.length; i++) {
        let position = sections[i].getBoundingClientRect().top;
        sectionPosition.push(position);
    }
    let screenPosition = window.innerHeight;

    let sectionHeight = [];
    for (let i = 0; i < sections.length; i++) {
        let Height = sections[i].offsetHeight;
        sectionHeight.push(Height);
    }

    //스크롤해서 해당 섹션으로 오면 네비게이션에 active 추가
    for (let j = 0; j < sectionPosition.length;) {
        if (sectionPosition[j] * -1 > sectionHeight[j]) {
            j++;
        } else {
            if (sectionPosition[j] * -1 <= sectionPosition[j + 1]) {
                nav[j].classList.add('active')
                nav[j + 1].classList.remove('active');
                break;
            } else {
                if (j !== 4) {
                    nav[j + 1].classList.add('active');
                    nav[j].classList.remove('active');
                }
                break;
            }
        }
    }

    //showUp 클래스가 있는 요소는 해당 요소까지 스크롤이 되면 active를 추가
    showUps.forEach(showUp => {
        const showUpBot = showUp.getBoundingClientRect().top + 300;

        if (showUpBot < screenPosition) {
            showUp.classList.add('active');
        } else {
            showUp.classList.remove('active');
        }
    });

});
