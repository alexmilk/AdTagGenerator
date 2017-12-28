copyAdTag = () => {
    let copyText = document.getElementById("adTagId");
    copyText.select();
    document.execCommand("Copy");
};