$(document).ready(function () {
    console.log('asd2')
    $(".box-header").on("click", function() {
        $(this).toggleClass("active");
        $(this).next().slideToggle(200);
        console.log('asd')
      });

     $('#hd_image').hide();
    $("#but_upload").click(function () {

        var fd = new FormData();
        var files = $('#formFile')[0].files;

        // Check file selected or not
         if (files.length > 0) {
             fd.append('file', files[0]);

           $.ajax({
                 url: '',
                type: 'post',
                data: fd,
                 contentType: false,
                 processData: false,
                beforeSend: function(response){
                     $('#form_hide').hide();
                     $('#hd_image').show();
                 },
                 success: function (response) {
                     if (response != 0) { 
                         $('#form_hide').show();
                         $('#hd_image').hide();
                        // var obj = jQuery.parseJSON(response);
                         console.log(response);
                    } else {
                     alert('file not uploaded');
                         $('#form_hide').show();
                        
                     }
               }
           });
        } else {
            alert("Please select a file.");
        }
   });
});


$("button").click(function(){
    $("div").text($("form").serialize());
  });

  function showForm(formNumber) {
    // Hide the current form
    var currentFormContainer = document.getElementById("form" + (formNumber - 1) + "-container");
    currentFormContainer.style.display = "none";
    
    // Show the next form
    var nextFormContainer = document.getElementById("form" + formNumber + "-container");
    nextFormContainer.style.display = "block";
    
    // Optionally, you can also focus on the first input field of the next form
    var nextForm = nextFormContainer.querySelector("form");
    nextForm.querySelector("input").focus();
  }

  var formCount = 1;

  function addForm() {
      if (formCount >= 5) {
          alert("You can't add more forms.");
          return;
      }

      formCount++;

      var form = document.createElement("div");
      form.className = "box-header";
      form.id = "box" + formCount;

      var formNum = document.createElement("div");
      formNum.className = "b1";
      formNum.innerHTML = formCount;

      var formTitle = document.createElement("div");
      formTitle.className = "new";
      formTitle.innerHTML = "New Referral";
      formTitle.addEventListener("click", function() {
          toggleForm(formCount);
      });

      var formIcon = document.createElement("div");
      formIcon.className = "iconn";
      formIcon.innerHTML = '<i class="fa-regular fa-square-caret-down"></i>';

      formTitle.appendChild(formIcon);

      form.appendChild(formNum);
      form.appendChild(formTitle);

      var formContent = document.createElement("div");
      formContent.className = "form_inp";
      formContent.id = "form" + formCount;
      formContent.style.display = "none";

      // add your form elements here
      var firstNameInput = document.createElement("input");
      firstNameInput.type = "text";
      firstNameInput.name = "firstName" + formCount;
      firstNameInput.placeholder = "First Name";
      formContent.appendChild(firstNameInput);

      // add more form elements here

      form.appendChild(formContent);

      var container = document.getElementById("form-container");
      container.appendChild(form);

      if (formCount >= 5) {
          alert("You have reached the maximum number of forms.");
      }
  }

  function toggleForm(formNum) {
      var form = document.getElementById("form" + formNum);
      if (form.style.display === "none") {
          form.style.display = "block";
      } else {
          form.style.display = "none";
      }
  }

  function checkFormCount() {
      if (formCount < 5) {
          alert("You need to add more forms to finish.");
      }
  }