//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
//The main application JS                                    ||
//Created by Alex Milkis - 2017                              ||
//The MIT License                                            ||
//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

copyAdTag = () => {
    let copyText = document.getElementById("adTagId");
    copyText.select();
    document.execCommand("Copy");
};
appendVastSlot = (event) => {
    let selectors = {
        prop: $(event.target).val(),
        adTag: $("#adTagId")
    };
    selectors.adTag.val(vastSlots[selectors.prop].adTagUrl);
    selectors.adTag.focus();
};
appendDfpSlot = (event) => {
    let selectors = {
        prop: $(event.target).val(),
        adTag: $("#adTagId")
    };
    selectors.adTag.val(dfpSlots[selectors.prop].adTagUrl);
    selectors.adTag.focus();
};
appendVpaidSlot = (event) => {
    let selectors = {
        prop: $(event.target).val(),
        adTag: $("#adTagId")
    };
    selectors.adTag.val(vpaidUnits[selectors.prop].adTagUrl);
    selectors.adTag.focus();
};