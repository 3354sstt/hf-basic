function() {
  var app = $$(this).app;
  var vetId = $("#vet_id").val();
  var grdIdNew = $("select#SelectByZip").val();
  var user = $("#user_name").text();

  PairGuardianToVeteran(app, vetId, grdIdNew, user, UpdateGuardianDataGrid);

  return true;
};

//@ sourceURL=flight_detail/loggedIn/selectors/#ByZipSubmit~click.js
