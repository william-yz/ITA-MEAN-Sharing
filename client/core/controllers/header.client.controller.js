/**
 * Created by HUGO on 5/16/2016.
 */
angular.module('backendMaintain').controller('seekersMaintain', ['$rootScope', '$scope', '$http', '$uibModal', 'i18nService', function ($rootScope, $scope, $http, $uibModal, i18nService) {
    i18nService.setCurrentLang("zh-cn");
    $scope.myData = {
        enableSorting: true,
        showGridFooter: true,
        showColumnFooter: true,
        enableColumnResizing: true,
        enableGridMenu: true,
        paginationPageSizes: [25, 50, 75],
        paginationPageSize: 25,
        enableRowSelection: true,
        enableRowHeaderSelection: false
    }



    $scope.getData = function(){
        $http.post('/api/v1/seeker').then(function(res){
            if(res){
                console.log(res.data);
                $scope.myData.data = res.data;
            }else{
                console.log('2');
            }
        })
    }


    $scope.myData.multiSelect = false;
    $scope.myData.modifierKeysToMultiSelect = false;
    $scope.myData.noUnselect = true;
    $scope.myData.onRegisterApi = function( gridApi ) {
        $scope.gridApi = gridApi;
    };

    $scope.myData.columnDefs = [
        {field: 'name', enableFiltering: true, allowCellFocus:false},
        {field: 'email', allowCellFocus:false},
        {field: 'phone', displayName: 'Contact', allowCellFocus:false},
        {field: 'school', allowCellFocus:false}
        //{field: 'aaa', displayName: 'Operation', cellTemplate:'<div class="ui-grid-cell-contents text-center"><button class="btn btn-primary btn-xs" title="Edit" ><i class="glyphicon glyphicon-pencil"></i></button> <button class="btn btn-primary btn-xs" title="Preview"><i class="glyphicon glyphicon-floppy-disk"></i></button></div>'},
    ];
    $scope.getData();
    //$scope.getValue = function() {
    //    var currentSelection = $scope.gridApi.cellNav.getCurrentSelection();
    //    console.log(currentSelection);
    //};

    $scope.updateSeeker = function(){
        if($scope.gridApi.grid.selection.selectedCount == 0){
            alert('pls select a row first.')
        }else{
            $rootScope.entity = $scope.gridApi.grid.selection.lastSelectedRow.entity;
            $uibModal.open({
                templateUrl: './modalTemplate.html',
                controller: 'seekerUpdate',
                size: 'md',
                backdrop: 'static'
            });
        }
    };

    $scope.createSeeker = function(){
        $uibModal.open({
            templateUrl: './modalTemplate.html',
            controller: 'seekerCreate',
            size: 'md',
            backdrop: 'static'
        })
    }
    $scope.preview = function(){
        alert('TBC');
    };

    $rootScope.refreshForCreateOrUpdate = function(seeker){
        if(seeker != null){
            $scope.myData.data.push(seeker);
            //$scope.gridApi.core.notifyDataChange("all");
            //$scope.gridApi.core.refreshRows();
            //$scope.gridApi.core.queueRefresh();
            //$scope.gridApi.core.refresh(true);
        }else{
            $scope.getData();
        }

    }


}]);

angular.module('backendMaintain').controller('seekerUpdate', ['$rootScope', '$scope', '$http', '$uibModal', '$uibModalInstance', 'toaster',
    function ($rootScope, $scope, $http, $uibModal, $uibModalInstance, toaster) {
        //$scope.seeker = {};
        //$scope.seeker.name = $rootScope.entity.name;
        //$scope.seeker.email = $rootScope.entity.email;
        //$scope.seeker.school = $rootScope.entity.school;
        //$scope.seeker.phone = $rootScope.entity.phone;
        var copyObjectData = function(oldData){
            var dataForEdit = [];
            _.times(oldData.length, function(n){
                dataForEdit.push(_.cloneDeep(oldData[n]));
            });
            return dataForEdit;
        }

        $scope.seeker = _.cloneDeep($rootScope.entity);
        $scope.submit = function(){
            $http.post('/api/seeker/update', $scope.seeker).success(function (data){
                console.log('s');
                $uibModalInstance.close('ok');
                toaster.pop('success', 'update success');
                $rootScope.refreshForCreateOrUpdate(null);
            }).error(function(){
                console.log('2');
                toaster.pop('error', 'update fail,try again');
            });

        }
        $scope.cancel = function () {
            $uibModalInstance.close('cancel');
        };
    }
]);

angular.module('backendMaintain').controller('seekerCreate', [ '$rootScope','$scope', '$http', '$uibModal', '$uibModalInstance', 'toaster',
    function ($rootScope, $scope, $http, $uibModal, $uibModalInstance, toaster) {
        $scope.submit = function(){
            $http.post('/api/seeker/new', $scope.seeker).success(function (data){
                $uibModalInstance.close('ok');
                toaster.pop('success', 'Create success');
                $rootScope.refreshForCreateOrUpdate($scope.seeker);
            }).error(function(){
                console.log('2');
                toaster.pop('error', 'Create fail,try again');
            })

        }
        $scope.cancel = function () {
            $uibModalInstance.close('cancel');
        };
    }
]);
