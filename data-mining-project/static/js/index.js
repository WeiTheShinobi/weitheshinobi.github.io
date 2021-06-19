var 臺灣鹽博物館 = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一望無際的鹽田中，有兩座白色金字塔並肩聳立，與七股鹽山遙遙相望，這裡是台灣鹽博物館。走進這座鹽業的堡壘，用視覺回憶鹽田風光；用聽覺感受鹽工艱辛；用觸覺掌握鹽粒結晶；用嗅覺想像潮濕礦場；用味覺品嘗粗鹽鹹味；用感覺和認知完整體會一路走來的鹽業歷史。"
var 七股鹽山 = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;鹽場內共有2座鹽山：主峰與北峰，主峰的鹽是鹽場停產後所留下之鹽，海拔高度20公尺，約6萬公噸；質地堅硬，表層有落塵覆蓋，已成為七股觀光地標。北峰是西澳洲的鹽，是粉碎鹽工廠的原料鹽，像極雪白的極地山頭。\n"

$("#臺灣鹽博物館").click(function () {
    $("#tips").text("");
    $("#t-title").text("臺灣鹽博物館");
    $("#t-content").html(臺灣鹽博物館);
    $("#temperature-img").attr('src', "static/images/tourist/temperature/臺灣鹽博物館.png")
    $("#tourist-img").attr('src', "static/images/tourist/tourist/臺灣鹽博物館.png")
});

$("#七股鹽山").click(function () {
    $("#tips").text("");
    $("#t-title").text("七股鹽山");
    $("#t-content").html(七股鹽山);
    $("#temperature-img").attr('src', "static/images/tourist/temperature/七股鹽山.png")
    $("#tourist-img").attr('src', "static/images/tourist/tourist/七股鹽山.png")
});

