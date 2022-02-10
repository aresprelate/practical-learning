console.log("The Websit Has Started");
alert("We use cookies!");
alertify.confirm("This is a confirm dialog.",
  function(){
    alertify.success('Ok');
  },
  function(){
    alertify.error('Cancel');
  });
