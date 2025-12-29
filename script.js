// 첫 페이지 (index.html)에서 클릭된 회사 정보를 URL 파라미터에서 가져옴
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const companyName = urlParams.get('company');

    if (companyName) {
        document.getElementById('company-name').textContent = companyName;
        document.getElementById('company-info').textContent = companyName + '의 회사 정보가 여기에 표시됩니다.';
    }
};

// 뒤로 가기 버튼 클릭 시 첫 페이지로 돌아가는 기능
function goBack() {
    window.history.back();
}
