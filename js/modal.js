$(document).ready(function () {
  var modal = $("#myModal");
  var closeButton = $(".close-btn");
  var notTodayCheckbox = $("#notToday");

  // 이벤트 섹션 선택 (좀 더 명확한 선택자 사용)
  var eventSection = $("section.event");
  console.log(eventSection);

  // 모달 이미지 클릭 시 이벤트 섹션으로 이동하고 모달 닫기
  $("#modalImage").click(function () {
    if (eventSection.length) {
      eventSection[0].scrollIntoView({ behavior: "smooth" });
      modal.hide();
    } else {
      console.error("이벤트 섹션을 찾을 수 없습니다.");
    }
  });

  // 쿠키 확인: '오늘 하루 열지 않음'이 체크되어 있으면 팝업을 띄우지 않음
  if (document.cookie.indexOf("notToday=true") === -1) {
    modal.show();
  }

  // 닫기 버튼 클릭 시 모달 닫기
  closeButton.click(function () {
    modal.hide();
  });

  // 입력칸 처리: 두 개의 form 모두 적용하도록 수정
  $(".submitbtn button").click(function () {
    var parentForm = $(this).closest(".event-form"); // 클릭한 버튼의 form을 가져옴
    var name = parentForm.find("#name").val();
    var phone = parentForm.find("#phone").val();

    // 입력값 유효성 검사
    if (!name || !phone) {
      alert("성함과 휴대폰 번호를 입력해주세요.");
      return;
    }

    // 전화번호 간단한 유효성 검사 (숫자만 허용)
    var phoneRegex = /^[0-9]{10,11}$/;
    if (!phoneRegex.test(phone)) {
      alert("유효한 휴대폰 번호를 입력해주세요.");
      return;
    }

    // 이름과 전화번호를 결합하여 고유한 키 생성
    var participationKey = name + "_" + phone;

    // 이미 해당 이름과 번호로 이벤트에 참여했는지 로컬 스토리지에서 확인
    var hasParticipated = localStorage.getItem(participationKey);

    if (hasParticipated) {
      alert("이미 참여한 이벤트입니다.");
      return;
    }

    // 성공 메시지 표시: 클릭한 form의 성공 메시지만 보여줌
    parentForm.find(".success-message").show();

    // 참여 여부를 로컬 스토리지에 저장
    localStorage.setItem(participationKey, true);

    // 서버로 전송하는 로직 추가 가능
  });
  $(document).ready(function () {
    // .cs-btn-event 클릭 시 이벤트 섹션으로 스크롤 이동
    $('.cs-btn-event').click(function (e) {
      e.preventDefault(); // 기본 동작 막기
  
      // 이벤트 섹션이 존재하는지 확인
      var eventSection = $('section.event');
  
      if (eventSection.length) {
        // 이벤트 섹션으로 부드럽게 스크롤 이동
        $('html, body').animate({
          scrollTop: eventSection.offset().top
        }, 800); // 800ms에 걸쳐 이동 (원하는 속도로 변경 가능)
      } else {
        console.error('이벤트 섹션을 찾을 수 없습니다.');
      }
    });
  });
  
});
