var planes = [
  { callsign: "SP-EDC", type: "C172"},
  { callsign: "PH-LOU", type: "C172"}
  
];

var page = new tabris.Page({
  title: "CAVOK",
  topLevel: true
});

page.open();

var collectionView = tabris.create("CollectionView", {
  layoutData: {left: 0, top: 0, right: 0, bottom: 0},
  items: planes,
  itemHeight: 50,
  initializeCell: function(cell) {
    var nameTextView = new tabris.TextView({
      layoutData: {left: 15, top: 16, right: 30},
      alignment: "left"
    }).appendTo(cell);
    cell.on("change:item", function(widget, plane) {
      nameTextView.set("text", plane.callsign);
    });
  }
}).on("select", function(target, value) {
 
}).appendTo(page);
