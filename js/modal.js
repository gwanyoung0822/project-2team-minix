$(document).ready(function() {
    var modal = $("#myModal");
    var closeButton = $(".close-btn");
    var notTodayCheckbox = $("#notToday");
  
    // 이벤트 섹션 선택 (좀 더 명확한 선택자 사용)
    var eventSection = $("section.event");
  
    // 디버깅을 위해 콘솔에 출력 (이벤트 섹션이 제대로 선택되었는지 확인)
    console.log(eventSection);
  
    // 모달 이미지 클릭 시 이벤트 섹션으로 이동하고 모달 닫기
    $("#modalImage").click(function () {
      if (eventSection.length) {
        // 이벤트 섹션으로 스크롤 이동
        eventSection[0].scrollIntoView({ behavior: "smooth" });
  
        // 모달 닫기
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
  
    // '오늘 하루 열지 않음' 체크 시 모달을 바로 닫고 쿠키 저장
    // notTodayCheckbox.click(function () {
    //   if (notTodayCheckbox.is(":checked")) {
        // '오늘 하루 열지 않음'이 체크된 경우 쿠키 설정
    //     document.cookie = "notToday=true; path=/; max-age=86400"; // 1일 동안 쿠키 저장
    //     modal.hide();
    //   }
    // });
    // 새로고침 시 성공 메시지가 유지되지 않도록 로컬 스토리지 제거
    // 만약 로컬 스토리지를 쓴 적이 있다면 이 라인으로 기존 데이터를 지울 수 있습니다.
    localStorage.removeItem("eventSuccess");
  
    // 이벤트 입력칸
    $("#submitButton").click(function () {
      // 입력된 값 가져오기
      var name = $("#name").val();
      var phone = $("#phone").val();
  
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
  
      // 이벤트 참여 처리
      $(".success-message").show();
  
      // 추가로 서버로 전송하는 로직을 구현할 수 있음 (예: AJAX 사용)
      // $.ajax({
      //   url: "your-server-endpoint",
      //   method: "POST",
      //   data: {
      //     name: name,
      //     phone: phone,
      //   },
      //   success: function (response) {
      //     $(".success-message").show();
      //   },
      //   error: function () {
      //     alert("이벤트 참여에 실패했습니다. 다시 시도해주세요.");
      //   },
      // });
    });
  });