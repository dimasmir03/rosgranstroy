function init() {
   // Наследуем класс нашего контрола от ymaps.control.Button.
   RegionControl = ymaps.util.defineClass(
      function (parameters) {
         RegionControl.superclass.constructor.call(this, parameters);
      },
      ymaps.control.Button,
      /** @lends ymaps.control.Button */{
         onAddToMap: function (map) {
            RegionControl.superclass.onAddToMap.call(this, map);
            this.setupStateMonitor();
            this.loadRegions(this.state.get("values"));
         },
         setupStateMonitor: function () {
            this.stateMonitor = new ymaps.Monitor(this.state);
            this.stateMonitor.add("values", this.handleStateChange, this);
         },
         handleRegionsLoaded: function (res) {
            if (this.regions) {
               map.geoObjects.remove(this.regions);
            }
            this.regions = new ymaps.ObjectManager();
            this.regions.add( res.features.map( function (feature) {
               feature.id = feature.properties.iso3166;
               feature.options = {
                  strokeColor: "#6961b0",
                  strokeOpacity: 0.1,
                  fillColor: "#6961b0",
                  fillOpacity: 0.3,
                  hintCloseTimeout: 0,
                  hintOpenTimeout: 0,
               };
               return feature;
            }));
            map.geoObjects.add(this.regions);
            this.selectedRegionId = "";
            this.regions.events
            .add("mouseenter",function (e) {
               var id = e.get("objectId");
               this.regions.objects.setObjectOptions(id, {strokeWidth: 2,});
            }, this)
            .add("mouseleave",function (e) {
               var id = e.get("objectId");
               if (this.selectedRegionId !== id) {
                  this.regions.objects.setObjectOptions(id, {strokeWidth: 1,});
               }
            }, this)
            .add("click",function (e) {
               var id = e.get("objectId");
               if (this.selectedRegionId) {
                  this.regions.objects.setObjectOptions(this.selectedRegionId, {
                     strokeWidth: 1,
                     fillColor: "#6961b0",
                  });
                  if (!map.balloon.isOpen()) {
                     var coords = e.get("coords");
                     map.balloon.open(coords, {
                        contentHeader: "Событие!",
                        contentBody: "<p>Кто-то щелкнул по карте.</p>" +
                           "<p>Координаты щелчка: " + [coords[0].toPrecision(6), coords[1].toPrecision(6)].join(", ") +
                           "</p>",
                        contentFooter: "<sup>Щелкните еще раз</sup>",
                     });
                  } else {
                     map.balloon.close();
                  }
               }
               this.regions.objects.setObjectOptions(id, {
                  strokeWidth: 2,
                  fillColor: "#3B3781",
               });
               this.selectedRegionId = id;
            }, this);
         },
         loadRegions: function (params) {
            this.disable();
            return ymaps.borders.load(params.region, params)
            .then(this.handleRegionsLoaded, this)
            .always(this.enable, this);
         },
      }
   )
      map = new ymaps.Map(
         "map",
         {
            center: [66.4178, 94.2334],
            zoom: 3,
            controls: []
            //'smallMapDefaultSet'
         }, 
         {
            suppressMapOpenBlock: true,
            yandexMapDisablePoiInteractivity: true,
            //restrictMapArea: true
         }
      ),
      control = new ymaps.control.RouteButton
      console.log(ymaps.control)

      control.routePanel.geolocate('from')
  
      control.state.set('expanded', false),
      objectManager = new ymaps.ObjectManager(
         {
            clusterize: false,
            gridSize: 64,
            //pieChart.clusterIconLayout: "default#pieChart"
         }
      ),
      regionControl = new RegionControl(
         {
            state: {
               enabled: true,
               values: {
                  region: "RU",
                  lang: "ru",
                  quality: "1",
               },
            },
            float: "right",
            maxWidth: [300]
         }
      ),
      dataa ={
         "type": "FeatureCollection",
         "features": [
             {"type": "Feature", "id": 0,  "geometry": {"type": "Point", "coordinates": []}, "properties": {"balloonContent": "ВПП",   "clusterCaption": "1", "hintContent": "ВПП", "iconCaption": "ВПП"}, "options": {"preset": ""}},
             {"type": "Feature", "id": 1,  "geometry": {"type": "Point", "coordinates": []}, "properties": {"balloonContent": "Аптека",   "clusterCaption": "Аптека", "hintContent": "Аптека", "iconCaption": "Школа"}, "options": {"preset": "islands#blueDotIconWithCaption"}},
             {"type": "Feature", "id": 2,  "geometry": {"type": "Point", "coordinates": []}, "properties": {"balloonContent": "Аптека",   "clusterCaption": "Аптека", "hintContent": "Аптека", "iconCaption": "Школа"}, "options": {"preset": "islands#blueCircleDotIconWithCaption"}},
             {"type": "Feature", "id": 3,  "geometry": {"type": "Point", "coordinates": []}, "properties": {"balloonContent": "Аптека",   "clusterCaption": "Аптека", "hintContent": "Аптека", "iconCaption": "Школа"}, "options": {"preset": "islands#blueCircleDotIconWithCaption"}},
             {"type": "Feature", "id": 4,  "geometry": {"type": "Point", "coordinates": []}, "properties": {"balloonContent": "Аптека",   "clusterCaption": "Аптека", "hintContent": "Аптека", "iconCaption": "Школа"}, "options": {"preset": "islands#blueCircleDotIconWithCaption"}},
             {"type": "Feature", "id": 5,  "geometry": {"type": "Point", "coordinates": []}, "properties": {"balloonContent": "Аптека",   "clusterCaption": "Аптека", "hintContent": "Аптека", "iconCaption": "Школа"}, "options": {"preset": "islands#blueCircleDotIconWithCaption"}},
             {"type": "Feature", "id": 6,  "geometry": {"type": "Point", "coordinates": []}, "properties": {"balloonContent": "Аптека",   "clusterCaption": "Аптека", "hintContent": "Аптека", "iconCaption": "Школа"}, "options": {"preset": "islands#blueCircleDotIconWithCaption"}},
             {"type": "Feature", "id": 7,  "geometry": {"type": "Point", "coordinates": []}, "properties": {"balloonContent": "Аптека",   "clusterCaption": "Аптека", "hintContent": "Аптека", "iconCaption": "Школа"}, "options": {"preset": "islands#blueCircleDotIconWithCaption"}},
             {"type": "Feature", "id": 8,  "geometry": {"type": "Point", "coordinates": []},  "properties": {"balloonContent": "Аптека",   "clusterCaption": "Аптека", "hintContent": "Аптека", "iconCaption": "Школа"}, "options": {"preset": "islands#blueCircleDotIconWithCaption"}},
             {"type": "Feature", "id": 9,  "geometry": {"type": "Point", "coordinates": []}, "properties": {"balloonContent": "Аптека",   "clusterCaption": "Аптека", "hintContent": "Аптека", "iconCaption": "Школа"}, "options": {"preset": "islands#blueCircleDotIconWithCaption"}},
             {"type": "Feature", "id": 10, "geometry": {"type": "Point", "coordinates": []},  "properties": {"balloonContent": "Школа",    "clusterCaption": "Школа", "hintContent": "Школа", "iconCaption": "Школа"}, "options": {"preset": "islands#greenCircleDotIconWithCaption"}},
             {"type": "Feature", "id": 11, "geometry": {"type": "Point", "coordinates": []},  "properties": {"balloonContent": "Школа",    "clusterCaption": "Школа", "hintContent": "Школа", "iconCaption": "Школа"}, "options": {"preset": "islands#greenCircleDotIconWithCaption"}},
             {"type": "Feature", "id": 12, "geometry": {"type": "Point", "coordinates": []},   "properties": {"balloonContent": "Школа",    "clusterCaption": "Школа", "hintContent": "Школа", "iconCaption": "Школа"}, "options": {"preset": "islands#greenCircleDotIconWithCaption"}},
             {"type": "Feature", "id": 13, "geometry": {"type": "Point", "coordinates": []}, "properties": {"balloonContent": "Школа",    "clusterCaption": "Школа", "hintContent": "Школа", "iconCaption": "Школа"}, "options": {"preset": "islands#greenCircleDotIconWithCaption"}},
             {"type": "Feature", "id": 14, "geometry": {"type": "Point", "coordinates": []}, "properties": {"balloonContent": "Школа",    "clusterCaption": "Школа", "hintContent": "Школа", "iconCaption": "Школа"}, "options": {"preset": "islands#greenCircleDotIconWithCaption"}},
             {"type": "Feature", "id": 15, "geometry": {"type": "Point", "coordinates": []}, "properties": {"balloonContent": "Школа",    "clusterCaption": "Школа", "hintContent": "Школа", "iconCaption": "Школа"}, "options": {"preset": "islands#greenCircleDotIconWithCaption"}},
             {"type": "Feature", "id": 16, "geometry": {"type": "Point", "coordinates": []}, "properties": {"balloonContent": "Школа",    "clusterCaption": "Школа", "hintContent": "Школа", "iconCaption": "Школа"}, "options": {"preset": "islands#greenCircleDotIconWithCaption"}},
             {"type": "Feature", "id": 17, "geometry": {"type": "Point", "coordinates": []}, "properties": {"balloonContent": "Школа",    "clusterCaption": "Школа", "hintContent": "Школа", "iconCaption": "Школа"}, "options": {"preset": "islands#greenCircleDotIconWithCaption"}},
             {"type": "Feature", "id": 18, "geometry": {"type": "Point", "coordinates": []},   "properties": {"balloonContent": "Школа",    "clusterCaption": "Школа", "hintContent": "Школа", "iconCaption": "Школа"}, "options": {"preset": "islands#greenCircleDotIconWithCaption"}},
             {"type": "Feature", "id": 19, "geometry": {"type": "Point", "coordinates": []},  "properties": {"balloonContent": "Школа",    "clusterCaption": "Школа", "hintContent": "Школа", "iconCaption": "Школа"}, "options": {"preset": "islands#greenCircleDotIconWithCaption"}},
             {"type": "Feature", "id": 20, "geometry": {"type": "Point", "coordinates": []}, "properties": {"balloonContent": "Больница", "clusterCaption": "Больница", "hintContent": "Больница", "iconCaption": "Больница"}, "options": {"preset": "islands#blackCircleDotIconWithCaption"}},
             {"type": "Feature", "id": 21, "geometry": {"type": "Point", "coordinates": []},   "properties": {"balloonContent": "Больница", "clusterCaption": "Больница", "hintContent": "Больница", "iconCaption": "Больница"}, "options": {"preset": "islands#blackCircleDotIconWithCaption"}},
             {"type": "Feature", "id": 22, "geometry": {"type": "Point", "coordinates": []},   "properties": {"balloonContent": "Больница", "clusterCaption": "Больница", "hintContent": "Больница", "iconCaption": "Больница"}, "options": {"preset": "islands#blackCircleDotIconWithCaption"}},
             {"type": "Feature", "id": 23, "geometry": {"type": "Point", "coordinates": []},  "properties": {"balloonContent": "Больница", "clusterCaption": "Больница", "hintContent": "Больница", "iconCaption": "Больница"}, "options": {"preset": "islands#blackCircleDotIconWithCaption"}},
             {"type": "Feature", "id": 24, "geometry": {"type": "Point", "coordinates": []},   "properties": {"balloonContent": "Больница", "clusterCaption": "Больница", "hintContent": "Больница", "iconCaption": "Больница"}, "options": {"preset": "islands#blackCircleDotIconWithCaption"}},
             {"type": "Feature", "id": 25, "geometry": {"type": "Point", "coordinates": []},  "properties": {"balloonContent": "Больница", "clusterCaption": "Больница", "hintContent": "Больница", "iconCaption": "Больница"}, "options": {"preset": "islands#blackCircleDotIconWithCaption"}},
             {"type": "Feature", "id": 26, "geometry": {"type": "Point", "coordinates": []}, "properties": {"balloonContent": "Больница", "clusterCaption": "Больница", "hintContent": "Больница", "iconCaption": "Больница"}, "options": {"preset": "islands#blackCircleDotIconWithCaption"}},
             {"type": "Feature", "id": 27, "geometry": {"type": "Point", "coordinates": []}, "properties": {"balloonContent": "Больница", "clusterCaption": "Больница", "hintContent": "Больница", "iconCaption": "Больница"}, "options": {"preset": "islands#blackCircleDotIconWithCaption"}},
             {"type": "Feature", "id": 28, "geometry": {"type": "Point", "coordinates": []}, "properties": {"balloonContent": "Больница", "clusterCaption": "Больница", "hintContent": "Больница", "iconCaption": "Больница"}, "options": {"preset": "islands#blackCircleDotIconWithCaption"}},
             {"type": "Feature", "id": 29, "geometry": {"type": "Point", "coordinates": []}, "properties": {"balloonContent": "Больница", "clusterCaption": "Больница", "hintContent": "Больница", "iconCaption": "Больница"}, "options": {"preset": "islands#blackCircleDotIconWithCaption"}},
             {"type": "Feature", "id": 30, "geometry": {"type": "Point", "coordinates": []}, "properties": {"balloonContent": "Магазин", "clusterCaption": "Магазин", "hintContent": "Магазин", "iconCaption": "Магазин"}, "options": {"preset": "islands#yellowCircleDotIconWithCaption"}},
             {"type": "Feature", "id": 31, "geometry": {"type": "Point", "coordinates": []}, "properties": {"balloonContent": "Магазин", "clusterCaption": "Магазин", "hintContent": "Магазин", "iconCaption": "Магазин"}, "options": {"preset": "islands#yellowCircleDotIconWithCaption"}},
             {"type": "Feature", "id": 32, "geometry": {"type": "Point", "coordinates": []}, "properties": {"balloonContent": "Магазин", "clusterCaption": "Магазин", "hintContent": "Магазин", "iconCaption": "Магазин"}, "options": {"preset": "islands#yellowCircleDotIconWithCaption"}},
             {"type": "Feature", "id": 33, "geometry": {"type": "Point", "coordinates": []}, "properties": {"balloonContent": "Магазин", "clusterCaption": "Магазин", "hintContent": "Магазин", "iconCaption": "Магазин"}, "options": {"preset": "islands#yellowCircleDotIconWithCaption"}},
             {"type": "Feature", "id": 34, "geometry": {"type": "Point", "coordinates": []}, "properties": {"balloonContent": "Магазин", "clusterCaption": "Магазин", "hintContent": "Магазин", "iconCaption": "Магазин"}, "options": {"preset": "islands#yellowCircleDotIconWithCaption"}},
             {"type": "Feature", "id": 35, "geometry": {"type": "Point", "coordinates": []}, "properties": {"balloonContent": "Магазин", "clusterCaption": "Магазин", "hintContent": "Магазин", "iconCaption": "Магазин"}, "options": {"preset": "islands#yellowCircleDotIconWithCaption"}},
             {"type": "Feature", "id": 36, "geometry": {"type": "Point", "coordinates": []}, "properties": {"balloonContent": "Магазин", "clusterCaption": "Магазин", "hintContent": "Магазин", "iconCaption": "Магазин"}, "options": {"preset": "islands#yellowCircleDotIconWithCaption"}},
             {"type": "Feature", "id": 37, "geometry": {"type": "Point", "coordinates": []}, "properties": {"balloonContent": "Магазин", "clusterCaption": "Магазин", "hintContent": "Магазин", "iconCaption": "Магазин"}, "options": {"preset": "islands#yellowCircleDotIconWithCaption"}},
             {"type": "Feature", "id": 38, "geometry": {"type": "Point", "coordinates": []}, "properties": {"balloonContent": "Магазин", "clusterCaption": "Магазин", "hintContent": "Магазин", "iconCaption": "Магазин"}, "options": {"preset": "islands#yellowCircleDotIconWithCaption"}},
             {"type": "Feature", "id": 39, "geometry": {"type": "Point", "coordinates": []},  "properties": {"balloonContent": "Магазин", "clusterCaption": "Магазин", "hintContent": "Магазин", "iconCaption": "Магазин"}, "options": {"preset": "islands#yellowCircleDotIconWithCaption"}},
             {"type": "Feature", "id": 40, "geometry": {"type": "Point", "coordinates": []}, "properties": {"balloonContent": "Бар", "clusterCaption": "Бар", "hintContent": "Бар", "iconCaption": "Бар"}, "options": {"preset": "islands#violetCircleDotIconWithCaption"}},
             {"type": "Feature", "id": 41, "geometry": {"type": "Point", "coordinates": []}, "properties": {"balloonContent": "Бар", "clusterCaption": "Бар", "hintContent": "Бар", "iconCaption": "Бар"}, "options": {"preset": "islands#violetCircleDotIconWithCaption"}},
             {"type": "Feature", "id": 42, "geometry": {"type": "Point", "coordinates": []}, "properties": {"balloonContent": "Бар", "clusterCaption": "Бар", "hintContent": "Бар", "iconCaption": "Бар"}, "options": {"preset": "islands#violetCircleDotIconWithCaption"}},
             {"type": "Feature", "id": 43, "geometry": {"type": "Point", "coordinates": []}, "properties": {"balloonContent": "Бар", "clusterCaption": "Бар", "hintContent": "Бар", "iconCaption": "Бар"}, "options": {"preset": "islands#violetCircleDotIconWithCaption"}},
             {"type": "Feature", "id": 44, "geometry": {"type": "Point", "coordinates": []},  "properties": {"balloonContent": "Бар", "clusterCaption": "Бар", "hintContent": "Бар", "iconCaption": "Бар"}, "options": {"preset": "islands#violetCircleDotIconWithCaption"}},
             {"type": "Feature", "id": 45, "geometry": {"type": "Point", "coordinates": []}, "properties": {"balloonContent": "Бар", "clusterCaption": "Бар", "hintContent": "Бар", "iconCaption": "Бар"}, "options": {"preset": "islands#violetCircleDotIconWithCaption"}},
             {"type": "Feature", "id": 46, "geometry": {"type": "Point", "coordinates": []}, "properties": {"balloonContent": "Бар", "clusterCaption": "Бар", "hintContent": "Бар", "iconCaption": "Бар"}, "options": {"preset": "islands#violetCircleDotIconWithCaption"}},
             {"type": "Feature", "id": 47, "geometry": {"type": "Point", "coordinates": []},  "properties": {"balloonContent": "Бар", "clusterCaption": "Бар", "hintContent": "Бар", "iconCaption": "Бар"}, "options": {"preset": "islands#violetCircleDotIconWithCaption"}},
             {"type": "Feature", "id": 48, "geometry": {"type": "Point", "coordinates": []}, "properties": {"balloonContent": "Бар", "clusterCaption": "Бар", "hintContent": "Бар", "iconCaption": "Бар"}, "options": {"preset": "islands#violetCircleDotIconWithCaption"}},
         ]
      }
      fetch("http://192.168.88.128:8000/points",
      {
         method: 'get',
         headers: {
           'Accept': 'application/json, text/plain, */*',
           'Content-Type': 'application/json'
         }
      })
      .then((res) => res.json())
      .then((json) => {
          console.log("data ",json);
         points = json;
         changeData()
         console.log(dataa);
         objectManager.add(dataa)
       })

      myCollection = new ymaps.GeoObjectCollection(),
      
      MyListBoxItemLayout = ymaps.templateLayoutFactory.createClass(
         '<li><a href="#" style="background-color:red;">$[data.content]</a></li>'
      )
      MyListBoxSeparatorLayout = ymaps.templateLayoutFactory.createClass(
         '<li class="divider"></li>'
         )
         
        // Создаем экземпляр класса ymaps.control.SearchControl
    var mySearchControl = new ymaps.control.SearchControl({
      options: {
          // Заменяем стандартный провайдер данных (геокодер) нашим собственным.
          provider: new CustomSearchProvider(dataa.features),
          // Не будем показывать еще одну метку при выборе результата поиска,
          // т.к. метки коллекции myCollection уже добавлены на карту.
          noPlacemark: true,
          resultsPerPage: 5
      }});
      listboxitems = ['ВПП', 'ДАПП', 'ЖДПП', 'МАПП', 'МПП', 'ППП']
      .map(function (title) {
         return new ymaps.control.ListBoxItem(
            {
               data: {
                  content: title
               },
               state: {
                  selected: true
               }
            }
         )
      })
      reducer = function (filters, filter) {
         filters[filter.data.get('content')] = filter.isSelected();
         return filters;
      }
      listbox = new ymaps.control.ListBox(
         {
            data: {
               content: "Выберите фильтр",
               title: "Фильтр",
            },
            items: listboxitems,
            state: {
               expanded: false,
               filters: listboxitems.reduce(reducer, {})
            }
         },
         {//layout: MyListBoxLayout,
            expandOnClick: false,
         }
      )
      map.controls.add(listbox, {right: 15,top: 5,float: "right"})
      
      listbox.events.add(['select', 'deselect'], function (e) {
         var listboxitem = e.get('target');
         var filters = ymaps.util.extend({}, listbox.state.get('filters'));
         console.log(listboxitem.isSelected());
         filters[listboxitem.data.get('content')] = listboxitem.isSelected();
         listbox.state.set('filters', filters);
      })
      var filterMonitor = new ymaps.Monitor(listbox.state);
      filterMonitor.add('filters', function (filters) {
         objectManager.setFilter(getFilterFunction(filters));
      })
      function getFilterFunction(categories) {
         return function (obj) {
            var content = obj.properties.balloonContent;
            return categories[content]
         }
      }
      var switchPointsButton = new ymaps.control.Button({
         data: {content: "Поменять местами", title: ""},
         options: {selectOnClick: false, maxWidth: 160}
         
     });
     switchPointsButton.events.add('click',()=>{
      var filters = ymaps.util.extend({}, listbox.state.get('filters'));
      //for(var i=0;filters.length;i++){
         filters['ВПП'] = false;
         filters['МАПП'] = false;
         filters['МПП'] = false;
      //}
      listbox.state.set('filters', filters);
     })
      var points
      var dots = {
         'ВПП': 'islands#blueDotIconWithCaption',
         'МАПП': 'islands#yellowDotIconWithCaption',
         'МПП': 'islands#blackDotIconWithCaption',
         'ЖДПП': 'islands#orangeDotIconWithCaption',
         'ППП': 'islands#greenDotIconWithCaption',
         'ДАПП': 'islands#grayDotIconWithCaption'
      }
     

   

   function changeData() {
      console.log("ll ",points);
      for (var i = 0; i < points.length; i++) {
         dataa['features'][i]['properties']['iconCaption'] = points[i]['Наименование ПП']
         dataa['features'][i]['properties']['balloonContent'] = points[i]['Тип']
         dataa.features[i].geometry.coordinates[0] = points[i]["Координаты"].split(",")[0]
         dataa.features[i].geometry.coordinates[1] = points[i]["Координаты"].split(",")[1]
         dataa['features'][i]['options']['preset'] = dots[points[i]['Тип']]
      }
   }

   map.events.add("click", function (e) {
      if (!map.balloon.isOpen()) {
         var coords = e.get("coords");
         map.balloon.open(coords, {
            contentHeader: "Событие!",
            contentBody: "<p>Кто-то щелкнул по карте.</p>" +
               "<p>Координаты щелчка: " + [coords[0].toPrecision(6), coords[1].toPrecision(6)].join(", ") +
               "</p>",
            contentFooter: "<sup>Щелкните еще раз</sup>",
         });
      } else {
         map.balloon.close();
      }
   })

   map.controls.add(switchPointsButton)
   map.geoObjects.add(objectManager)
   map.controls.add(control);
   map.controls.add(regionControl);
   map.controls.add(mySearchControl, { float: 'right' });
}

function CustomSearchProvider(points) {
   this.points = points;
}

// Провайдер ищет по полю text стандартным методом String.ptototype.indexOf.
CustomSearchProvider.prototype.geocode = function (request, options) {
   var deferred = new ymaps.vow.defer(),
       geoObjects = new ymaps.GeoObjectCollection(),
   // Сколько результатов нужно пропустить.
       offset = options.skip || 0,
   // Количество возвращаемых результатов.
       limit = options.results || 50;
       
   var points = [];
   // Ищем в свойстве text каждого элемента массива.
   for (var i = 0, l = this.points.length; i < l; i++) {
       var point = this.points[i];
       if (point.properties.iconCaption.toLowerCase().indexOf(request.toLowerCase()) != -1) {
           points.push(point);
       }
   }
   // При формировании ответа можно учитывать offset и limit.
   points = points.splice(offset, limit);
   // Добавляем точки в результирующую коллекцию.
   for (var i = 0, l = points.length; i < l; i++) {
       var point = points[i],
           coords = point.geometry.coordinates,
                   text = point.properties.iconCaption;

       geoObjects.add(new ymaps.Placemark(coords, {
           name: text + ' name',
           description: text + ' description',
           balloonContentBody: '<p>' + text + '</p>',
           boundedBy: [coords, coords]
       }));
   }

   deferred.resolve({
       // Геообъекты поисковой выдачи.
       geoObjects: geoObjects,
       // Метаинформация ответа.
       metaData: {
           geocoder: {
               // Строка обработанного запроса.
               request: request,
               // Количество найденных результатов.
               found: geoObjects.getLength(),
               // Количество возвращенных результатов.
               results: limit,
               // Количество пропущенных результатов.
               skip: offset
           }
       }
   });

   // Возвращаем объект-обещание.
   return deferred.promise();
};

ymaps.ready(init);