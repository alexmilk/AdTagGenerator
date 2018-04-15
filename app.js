//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
//Main applications script                                   ||
//Created by Alex Milkis - 2017                              ||
//The MIT License                                            ||
//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

//Site ready functions and menu looping scripts.
$(document).ready(function() {
    $('#ribbonBeta').slideDown(900);
    let selectors = {
        adSlot: $("#adSlotSelector"),
        dfpSlot: $("#dfpSlotSelector"),
        vpaidSlot: $("#vpaidSlotSelector")
    };
    for (let prop in vastSlots) {
        selectors.adSlot.append("<option value= " + prop + ">" + vastSlots[prop].slotType + "</option>")
    }
    for (let prop in dfpSlots) {
        selectors.dfpSlot.append("<option value= " + prop + ">" + dfpSlots[prop].slotType + "</option>")
    }
    for (let prop in vpaidUnits) {
        selectors.vpaidSlot.append("<option value= " + prop + ">" + vpaidUnits[prop].slotType + "</option>")
    }
    $('#topLeftTitle').slideDown(900);
    $('#bottomCredit').slideDown(900);
});
//AdTag copy function
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