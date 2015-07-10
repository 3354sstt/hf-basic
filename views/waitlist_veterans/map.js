function(doc) {
  var statuses = ["Active", "Future-Fall", "Future-Spring"];
  var conflict = ["WWII", "Korea", "Vietnam", "Afghanistan", "Iraq"];
  if ((doc.type == "Veteran") 
      && (statuses.indexOf(doc.flight.status) != -1)
      && (doc.flight.id == "None")) {
    emit(conflict.indexOf((doc.vet_type || 'WWII')) + "-" + doc.app_date, doc.flight.group);
  }
}
