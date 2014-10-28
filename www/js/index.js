/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        //ajustarObjetos();
        try{
            ajustarObjetos();
        }catch(err){
            console.log('caidoge'+err.message);
        }
    },
    capturePhotoEdit: function() {
        //try {
        var pictureSource=navigator.camera.PictureSourceType;
        var destinationType=navigator.camera.DestinationType;
      // Take picture using device camera, allow edit, and retrieve image as base64-encoded string  
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20, allowEdit: true,
        destinationType: destinationType.DATA_URL });
        /*}catch(err){
            alert(err.message);
        }*/
    },
    
     onFail: function(message) {
      alert('Failed because: ' + message);
    },
    
 onPhotoDataSuccess: function(imageData) {
      // Uncomment to view the base64 encoded image data
      //console.log(imageData);

      // Get image handle
      //
      var smallImage = document.getElementById('largeImage');

      // Unhide image elements
      //
      smallImage.style.display = 'block';

      // Show the captured photo
      // The inline CSS rules are used to resize the image
      //
      smallImage.src = "data:image/jpeg;base64," + imageData;
    }
};
function ajustarObjetos(){
        var id = $( ":mobile-pagecontainer").pagecontainer( "getActivePage" ).attr('id');
    console.log(id);
        var cw = $("#"+id+' .simplerow').width();
        $("#"+id+' .simplerow').css({'height':cw+'px'}); 
        $("#"+id+' .twothird').css({'height':cw+'px'}); 
        $("#"+id+' .onethird').css({'height':cw+'px'}); 
        cw = $("#"+id+' .doble').width();
        $("#"+id+' .doble').css({'height':cw/2+'px'});
        cw = $("#"+id+' .doble-square').width();
        $("#"+id+' .doble-square').css({'height':(cw+60)+'px'});
        cw = $("#"+id+' .doble-middle').width();
        $("#"+id+' .doble-middle').css({'height':(cw/4)+'px'});
        $.each($('.icono [class*="icon-"]'),function(i,obj){
            $(obj).css("line-height",$(obj).parent().height()+"px");
            //$(obj).style['font-size']= ($(obj).parent().height()/2)+"px";
            $(obj).css("font-size",($(obj).parent().height()/3)+"px");
        });
}
function cambiarPagina(url){
    location.href=url;
    //$.mobile.changePage( url, { transition: "slide" });
}
function externalUrl(url){
    window.open(url,'_system');
}

function loadMenu(){
    $('#menuToggle').click(function(){
        var $parent = $(this).parent('nav');
        $parent.toggleClass("open");
        var navState = $parent.hasClass('open') ? "hide" : "show";
        $(this).attr("title", navState + " navigation");
        // Set the timeout to the animation length in the CSS.
        setTimeout(function(){
        console.log("timeout set");
        $('#menuToggle > span').toggleClass("navClosed").toggleClass("navOpen");
        }, 200);
        //e.preventDefault();
    });
}

// Para la camara
    var pictureSource;   // picture source
    var destinationType; // sets the format of returned value 

    // Wait for Cordova to connect with the device
    //
    
    // Cordova is ready to be used!
    //
    function onDeviceReady() {
        pictureSource=navigator.camera.PictureSourceType;
        destinationType=navigator.camera.DestinationType;
    }

    // Called when a photo is successfully retrieved
    //
    function onPhotoDataSuccess(imageData) {
      // Uncomment to view the base64 encoded image data
      //console.log(imageData);

      // Get image handle
      //
      var smallImage = document.getElementById('largeImage');
      var socialshare = document.getElementById('sharePicture');
      // Unhide image elements
      //
      smallImage.style.display = 'block';

      socialshare.style.display = 'block';

      // Show the captured photo
      // The inline CSS rules are used to resize the image
      //
      smallImage.src = "data:image/jpeg;base64," + imageData;
    }

    // Called when a photo is successfully retrieved
    //
    function onPhotoURISuccess(imageURI) {
      // Uncomment to view the image file URI 
      //console.log(imageURI);

      // Get image handle
      //
      var largeImage = document.getElementById('largeImage');
      var socialshare = document.getElementById('sharePicture');

      // Unhide image elements
      //
      largeImage.style.display = 'block';
      socialshare.style.display = 'block';
      // Show the captured photo
      // The inline CSS rules are used to resize the image
      //
      largeImage.src = imageURI;
    }

    // A button will call this function
    //
    function capturePhoto() {
      // Take picture using device camera and retrieve image as base64-encoded string
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
        destinationType: destinationType.DATA_URL });
    }

    // A button will call this function
    //
    function capturePhotoEdit() {
      // Take picture using device camera, allow edit, and retrieve image as base64-encoded string  
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20, allowEdit: true,
        destinationType: destinationType.DATA_URL });
    }

    // A button will call this function
    //
    function getPhoto(source) {
      // Retrieve image file location from specified source
      navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50, 
        destinationType: destinationType.FILE_URI,
        sourceType: source });
    }

    // Called if something bad happens.
    // 
    function onFail(message) {
      alert('Failed because: ' + message);
    }

