//Se lee por teclado el código del empleado, número de horas trabajadas, tarifa por hora.
// Calcular el salario básico, considerando la siguiente tabla de descuento.
//Crear una aplicación web que permita calcular el básico, descuento y salario neto.

// Se crea un modulo Angular // 

let app = angular.module('salariobApp', [])

app.controller('salariobCtrl', function($scope) {

    $scope.calculateSalary = function() {
          // Obtener valores del formulario
  
          let horas = $scope.hours;
          let tarifa_hora = $scope.rate;
          let a = horas * tarifa_hora;
          return a
          // Calcular salario básico
         
    }       
      $scope.porcentaje = function(){
        let basicSalary = $scope.calculateSalary()
        let descuento = 0;

        if (basicSalary <= 500) { 
          descuento  = 0;
          return descuento 

        } else if (basicSalary > 500 && basicSalary <= 1000) {
          descuento = 0.02;
          return descuento

        } else if (basicSalary > 1000 && basicSalary <= 4000) {
          descuento =  0.08;
          return descuento

        } else if (basicSalary > 4000 && basicSalary <= 8000) {
          descuento = 0.15;
          return descuento

        } else if (basicSalary > 8000 && basicSalary <= 10000) {
          descuento = 0.21;
          return descuento
          
        } else {
          descuento = 0.3;
          return descuento
        }
      }

        // Calcular descuento
      $scope.calculaDiscount = function() {
       
       return $scope.calculateSalary() * $scope.porcentaje();
        
      };

        // Calcular salario neto
          $scope.calculaSalarynet = function() {
          let salarioneto = $scope.calculateSalary() - $scope.calculaDiscount();
          return salarioneto;
          }
   
});