'use strict';

var HomeController = angularApp
.controller(
		'HomeController',
		function HomeController($scope, $stateParams, $rootScope,
				$http, $state, $location, siteId, UtilService,
				AlertService, $window, ControllerService, DataService) {

			$scope.alfrescoContext = UtilService.alfrescoContextRoot();
			$scope.token = sessionStorage.getItem('token');
alert("HomeController controller page load");
			// set initial index
			// Using variable to control the display
			// ng-show="" in HTML
			/*
			 * $scope.loadIndexPresentation = 4; $scope.loadIndexVideo =
			 * 4;
			 */
			$scope.loadIndexDocument = 4;

			// function to increase visible items
			$scope.ViewMore = function(item) {
				// don't increment if at the end of the list
				/*
				 * if (item === 'presentation') { if
				 * ($scope.loadIndexPresentation <
				 * $scope.presentationCount) {
				 * $scope.loadIndexPresentation += 4; if
				 * ($scope.loadIndexPresentation >=
				 * $scope.presentationCount) {
				 * $("#pstViewButton").addClass(
				 * "disable-view-more-button"); } } } else if (item ===
				 
				 * 'video') { if ($scope.loadIndexVideo <
				 * $scope.videoCount) { $scope.loadIndexVideo += 4; if
				 * ($scope.loadIndexVideo >= $scope.videoCount) {
				 * $("#vidViewButton").addClass(
				 * "disable-view-more-button"); }
				 *  } } else
				 */
				 alert("HomeController controller ViewMore");
				if (item === 'document') {
					if ($scope.loadIndexDocument < $scope.documentCount) {
						$scope.loadIndexDocument += 4;
						if ($scope.loadIndexDocument >= $scope.documentCount) {
							$("#docViewButton").addClass(
							"disable-view-more-button");
						}
					}
				}

			};

			$scope.onFeedbackSubmitCommentClick = function() 
			 alert("HomeController controller onFeedbackSubmitCommentClick");
				if (sessionStorage.getItem('token')) {
					alert("HomeController controller onFeedbackSubmitCommentClck session");
					var text = $scope.feedbackText;
					var feedbackType = $scope.feedbackDropdownSelectedOption.name;
					if (text != null || text != undefined || text != ''
						|| text != "") {
						var urlOnPage = $location;
						alert("HomeController controller onFeedbackSubmitCommentClck urlOnPage");
						var userId = sessionStorage.getItem('userId');
						var method = 'post';
						var url = UtilService.contextRoot()
						+ "/api/feedback";
						text = text.trim();
						var body = {
								"username" : String(userId),
								"url" : String(urlOnPage.$$absUrl),
								"feedbackText" : String(text),
								"feedbackType" : String(feedbackType)
						};

						var headers = {
								'Content-Type' : 'application/json'
						}

						$http({
							method : method,
							url : url,
							headers : headers,
							data : body
						}).then(function successCallback(response) {
							console.log(response);
							if (response.status === 200) {
								console.log('status 200');
							} else {
								console.log('status != 200');
							}
						}, function errorCallback(response) {
							console.log('error', response);
						});
					}
					$scope.feedbackText = '';
					$scope.feedbackDropdownSelectedOption = $scope.feedbackDropdownOptions[0];
					document.getElementById("#myModal");
				} else {
				alert("HomeController controller onFeedbackSubmitCommentClck else block");
					state.go('login');
					
				}
			}

			$scope.onMainSearchClick = function() {
				var text = $scope.mainSearchText;
				$scope.selectedMenuItem = '';
				$state.go('search', {
					term : text
				});
			}

			var initilizeFeedbackDropdown = function() {
			alert("HomeController controller initilizeFeedbackDropdown");
				$scope.feedbackDropdownOptions = [ {
					name : "I like something",
					id : 1
				}, {
					name : "I dislike something",
					id : 2
				}, {
					name : "I have a suggestion",
					id : 3
				} ];
				$scope.feedbackDropdownSelectedOption = $scope.feedbackDropdownOptions[0];
			};

			$scope.initApp = function() {
			alert("HomeController controller initAPP");
				initilizeFeedbackDropdown();

			};

			$scope.productOnclick = function() {
				$state.go('filter-search', {
					term : 'productOnclick'
				});						
			}// close of productOnclick

			$scope.marketingOnclick = function() {
				$state.go('filter-search', {
					term : 'marketingOnclick'
				});	
			}// close of marketingOnclick

			$scope.PerformActuarialAnalysisOnclick = function() {
				$state.go('filter-search', {
					term : 'PerformActuarialAnalysisOnclick'
				});
			}

			$scope.SalesProductsOnclick = function() {

				alert("I am inside the SalesProductsOnclick");
				$state.go('filter-search', {
					term : 'SalesProductsOnclick'
				});
			}
			/*$scope.OperationsAndServicesOnclick = function() {

						alert("I am inside the SalesProductsOnclick");
						$state.go('filter-search', {
							term : 'OperationsAndServicesOnclick'
						});
					}
			 */

			$scope.OperationsAndServicesOnclick = function() {

				alert("I am inside the SalesProductsOnclick");
				$state.go('filter-searchos', {
					term : 'OperationsAndServicesOnclick'
				});
			}
			$scope.ManageInvestmentsOnclick = function() {

				alert("I am inside the SalesProductsOnclick");
				$state.go('filter-search', {
					term : 'ManageInvestmentsOnclick'
				});
			}
			$scope.AdminAndFacilitiesOnclick = function() {

				alert("I am inside the SalesProductsOnclick");
				$state.go('filter-search', {
					term : 'AdminAndFacilitiesOnclick'
				});
			}
			$scope.RiskManagementOnclick = function() {

				alert("I am inside the SalesProductsOnclick");
				$state.go('filter-search', {
					term : 'RiskManagementOnclick'
				});
			}
			$scope.FinanceOnclick = function() {

				alert("I am inside the SalesProductsOnclick");
				$state.go('filter-search', {
					term : 'FinanceOnclick'
				});

			}

			$scope.HumanResourcesOnclick = function() {

				alert("I am inside the SalesProductsOnclick");
				$state.go('filter-search', {
					term : 'HumanResourcesOnclick'
				});
			}
			$scope.InformationTechnologyOnclick = function() {

				alert("I am inside the SalesProductsOnclick");
				$state.go('filter-search', {
					term : 'InformationTechnologyOnclick'
				});
			}
			$scope.LegalAndComplianceOnclick = function() {

				alert("I am inside the SalesProductsOnclick");
				$state.go('filter-search', {
					term : 'LegalAndComplianceOnclick'
				});
			}
			$scope.LearningAndDevelopmentOnclick = function() {

				alert("I am inside the SalesProductsOnclick");
				$state.go('filter-search', {
					term : 'LearningAndDevelopmentOnclick'
				});
			}

			$scope.mostReadOnClick = function() {

				alert("I am inside the SalesProductsOnclick");
				$state.go('mostRead', {
					term : 'mostReadOnClick'
				});
			}

			$scope.LCDocOnClick = function() {

				alert("I am inside the SalesProductsOnclick");
				$state.go('LCDoc', {
					term : 'LCDocOnClick'
				});
			}

			/***********************************************************
			 * function to decrease visible items $scope.showLess =
			 * function() { // don't decrement if at the start of the
			 * list if ($scope.loadIndexPresentation > 2) {
			 * $scope.loadIndexPresentation -= 2; } };
			 **********************************************************/

			var getPropertiesOf = function(docType) {
			alert("HomeController controller getPropertiesOf");
				var details = new Array();
				for (var i = 0; i < docType.length; i++) {
					var doc = docType[i];
					if (doc.name != null || doc.properties != null
							|| doc.id != null || doc.name != undefined
							|| doc.properties != undefined
							|| doc.id != undefined || doc.name != ''
								|| doc.properties != '' || doc.id != '') {

						details
						.push({
							"displayName" : doc.name.slice(0,
									doc.name.lastIndexOf(".")),
									"name" : doc.name,
									"by" : doc.properties["cm:author"] ? doc.properties["cm:author"]
						: '',
						"description" : doc.properties["cm:description"] ? doc.properties["cm:description"]
									: '',
									/*
									 * "category" :
									 * doc.properties["edcc:Theme"] ?
									 * doc.properties["edcc:Theme"] :
									 * '',
									 */
									"subCategory" : doc.properties["etl:Product"] ? doc.properties["etl:Product"]	: '' ||
											doc.properties["etl:EdelMarketing"] ? doc.properties["etl:EdelMarketing"]	: '' ||
													doc.properties["etl:Actuarial"] ? doc.properties["etl:Actuarial"]	: '' || 
															doc.properties["etl:Sales"] ? doc.properties["etl:Sales"] : '' || 
																	doc.properties["etl:OperationsAndServices"] ? doc.properties["etl:OperationsAndServices"] : ''
																		|| doc.properties["etl:InvestmentManagement"] ? doc.properties["etl:InvestmentManagement"]
																	: ''
																		|| doc.properties["etl:AdminAndFacilities"] ? doc.properties["etl:AdminAndFacilities"]
																		: ''
																			|| doc.properties["etl:Finance"] ? doc.properties["etl:Finance"]
																		: ''
																			|| doc.properties["etl:RiskManagement"] ? doc.properties["etl:RiskManagement"]
																			: ''
																				|| doc.properties["etl:HRPloicy"] ? doc.properties["etl:HRPloicy"]
																			: ''
																				|| doc.properties["etl:InformationTechnology"] ? doc.properties["etl:InformationTechnology"]
																				: ''
																					|| doc.properties["etl:LegalAndCompliance"] ? doc.properties["etl:LegalAndCompliance"]
																				: '',
																				/*
																				 * "sbu" :
																				 * doc.properties["edcc:sbu"] ?
																				 * doc.properties["edcc:sbu"] : '',
																				 */
																				"id" : doc.id
						});
					}
				}
				return details;
			}

			var setDetailsOfEachItem = function(segregatedByMime) {
			alert("HomeController controller setDetailsOfEachItem");
				// count set on UI
				/*
				 * $scope.presentationCount =
				 * segregatedByMime.presentation.length;
				 * $scope.videoCount = segregatedByMime.video.length;
				 */
				$scope.documentCount = segregatedByMime.document.length;

				// setting all data in a variable
				/*
				 * $scope.presentationDetails =
				 * getPropertiesOf(segregatedByMime.presentation);
				 * $scope.videoDetails =
				 * getPropertiesOf(segregatedByMime.video);
				 */
				$scope.documentDetails = getPropertiesOf(segregatedByMime.document);
			}

			var segregateDataByMimeType = function(listOfItems) {
			alert("HomeController controller segregateDataByMimeType");
				var segregatedByMime = new Array();
				/*
				 * var presentation = new Array(); var video = new
				 * Array();
				 */
				var document = new Array();

				for (var i = 0; i < listOfItems.length; i++) {
					var data = listOfItems[i].entry;
					if (data.content != undefined) {
						var mimeType = data.content.mimeType;
						// ppt
						if (mimeType != '') {

							document.push(data);
						}
					}
				}
				segregatedByMime.push({
					/*
					 * "presentation" : presentation, "video" : video,
					 */
					"document" : document
				});
				return segregatedByMime;
			}

			var getAllItems = function() {
				alert("HomeController controller getAllItems");
				var actionurl = UtilService.alfrescoContextRoot()
				+ "/alfresco/api/-default-/public/search/versions/1/search";
				var payload = {
						"query" : {
							"query" : "SITE:'" + siteId + "' AND (*)", // \"corporate-controller-bpri\"
							"language" : "afts"
						},
						"paging" : {
							"maxItems" : 100,
							"skipCount" : 0
						},
						"include" : [ "properties" ],
						/* "path" */
						/* "aspectNames" */
						"filterQueries" : [ {
							"query" : "TYPE:'cm:content'"
						}, {
							"query" : "-cm:creator:system"
						}, {
							"query" : "-TYPE:'fm:post'"
						} ],
						/*
						 * query specific to site here site ref is for c
						 * BPRI site
						 * "ANCESTOR:\"workspace://SpacesStore/9553fe6f-0c15-4996-928c-dc919b30ab13\""
						 * "query" : "cm:creator:username"
						 */
						"sort" : [ {
							"type" : "FIELD",
							"field" : "cm:mimeType",
							"ascending" : "true"
						} ],
						'defaults' : {
							'textAttributes' : [ 'cm:content', 'cm:name',
								'cm:description', 'cm:title' ],
								'defaultFTSOperator' : 'OR',
								'defaultFTSFieldOperator' : 'OR',
								'namespace' : 'cm',
								'defaultFieldName' : '\"/\"'
						}
				};

				

				
				$.ajax({

				    url : actionurl,
				    type : 'POST',
				    xhrFields: {
				        'withCredentials': true //Tell browser to provide credentials
				    },
					alert("HomeController controller getAllItems1");
				    data: payload,
				    crossDomain: true,
				    success : function(data) {			
				    	console.log('data');
				    	if (response.status === 200) {
						alert("HomeController controller getAllItems1 success" );
							if (response.data.list.entries.length > 0) {
								var listOfItems = response.data.list.entries;
								var segregatedByMime = segregateDataByMimeType(listOfItems)[0];
								setDetailsOfEachItem(segregatedByMime);
							} else {
								console
								.log('0 items in repository');
							}
						} else {
						alert("HomeController controller getAllItems1 else");
							console
							.log(
									'response other than 200 status code',
									response.status);
						}
				    	
				    },
				    error : function(request,error)
				    {
					alert("HomeController controller getAllItems1 error");
				    	console.log('error');
						$state.go('login');
				    }
				  });
				
				

			}

			$scope.open = function() {
			alert("HomeController controller scope open");
				console.log('opening pop up');
				var modalInstance = $modal.open({
					templateUrl : 'html/mostRead.html',
					controller : 'mostReadController',
				});
			}
			/*
			 * $window.open({ url : '/mostRead', templateUrl :
			 * 'html/mostRead.html', controller: 'mostReadController'
			 * });
			 */
			console.log("popup open")

			var init = function() {
			alert("HomeController controller init fucntion getll calling");
				getAllItems();
				alert("HomeController controller init end");
				/*
				 * $window.open("#mostRead","popup","width=850,height=750,left=100,top=30");
				 * $('#overlay').modal('open');
				 */

			}

			angular.element(document).ready(
					function() {
						console.log("**********HomeController*******");
						console.log("header shown");
						$("#headerId").show();
						$(this).scrollTop(0);
						alert("HomeController controller ready");
							init();
						
					});
		});