
$(document).ready(function() { //<<====== wont work without this
    $(window).scroll(function() {
        console.log('logging'+$(body).scrollTop());
        if($(body).scrollTop() < 20){
            $('.navBar').removeClass('scrolled opened').addClass('invertColor');
        } else if($(body).scrollTop() < 30){
            $('.navBar').removeClass('opened').addClass('scrolled');
        } else{
            $('.navBar').addClass('scrolled opened').removeClass('invertColor');
        }
    });

    $('#btn').click(function(){
        let data = {"_cmd":"insert", "name": $("#name").val(), "phone" : $("#phone").val(), "email": $("#email").val(), "type": $("#type").val()};
        if(!(data.name && data.phone && data.type && data.email)){
            $('#output').addClass('error').removeClass('success').html("Error:You need to fillup all data.").show();
            return;
        }

        $.ajax({
            type: "POST",
            url: 'http://simplestore.dipankar.co.in/api/nodel_codeninja',
            dataType: 'json',
            data: JSON.stringify(data),
            success: function (data) {
                $('#output').addClass('success').removeClass('error').html("Success: Request received").show();
            }
        });
    });
    var stripe = Stripe('pk_live_lDAmPOTef5SI9Q7ZJzL60DPK');
    $('#ninja_camp1').click(function(){
        stripe.redirectToCheckout({
            items: [{sku: 'sku_FAgfjmsfRg47ge', quantity: 1}],
            successUrl: 'https://crackthegoogle.com/success.html',
            cancelUrl: 'https://crackthegoogle.com/error.html',
          })
          .then(function (result) {
            if (result.error) {
                console.log('error')
              var displayError = document.getElementById('error-message');
              displayError.textContent = result.error.message;
            }
          });
    });
    $('#ninja_camp2').click(function(){
        stripe.redirectToCheckout({
            items: [{sku: 'sku_FAggz1fQWNE8pK', quantity: 1}],
            successUrl: 'https://crackthegoogle.com/success.html',
            cancelUrl: 'https://crackthegoogle.com/error.html',
          })
          .then(function (result) {
            if (result.error) {
                console.log('error')
              var displayError = document.getElementById('error-message');
              displayError.textContent = result.error.message;
            }
          });
    });

    $('.ninja_camp3').click(function(){
        stripe.redirectToCheckout({
            items: [{sku: 'sku_FAghzQchj8b7L2', quantity: 1}],
            successUrl: 'https://crackthegoogle.com/success.html',
            cancelUrl: 'https://crackthegoogle.com/error.html',
          })
          .then(function (result) {
            if (result.error) {
                console.log('error')
              var displayError = document.getElementById('error-message');
              displayError.textContent = result.error.message;
            }
          });
    });

});
