// import { Component, OnInit } from '@angular/core';
// import { NgOtpInputComponent } from 'ng-otp-input/lib/components/ng-otp-input/ng-otp-input.component';

// @Component({
//   selector: 'app-demo',
//   templateUrl: './demo.component.html',
//   styleUrls: ['./demo.component.css']
// })
// export class DemoComponent implements OnInit {
//   $scope.Submit = function() {  
//     var mobile = $scope.Mobilenumber;  
//     Service.GenerateOTP(mobile).then(function(p1) {  
//         var Messageshow = JSON.parse(p1.data);  
//         if (Messageshow == "OTP_SENT_SUCCESSFULLY") {  
//             $scope.countDown = 60;  
//             var timer = setInterval(function() {  
//                 $scope.countDown--;  
//                 if ($scope.countDown >= 0) {  
//                     $scope.$apply();  
//                 }  
//                 if ($scope.countDown == 0) {  
//                     $("#countid").hide();  
//                 }  
//             }, 1000);  
//         } else if (Messageshow == "OTP_EXPRID") {  
//             $("#countidresult").show();  
//             alert() p1.data;  
//         }  
//     });  
// } 
//   constructor() { }

//   ngOnInit(): void {
//   }

// }
