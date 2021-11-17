var coordsi
var map
var collection
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
               coordsi=0
      map.geoObjects.remove(placemark)
      coordsi = e.get("coords")
      var placemark = new ymaps.Placemark(coordsi, {
         balloonContent: 'цвет <strong>воды пляжа бонди</strong>'
     }, {
        preset: 'islands#icon',
        iconColor: '#0095b6'
      })
     map.geoObjects.add(placemark)
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
            center: [57.22367189897791, 40.170581916210025],
            zoom: 5,
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
             {"type": "Feature", "id": 0,  "geometry": {"type": "Point", "coordinates": []}, "properties": {"balloonContent": "занят",   "clusterCaption": "", "hintContent": "ВПП", "iconCaption": "занят"}, "options": {"preset": "занят"}},
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
      fetch("http://192.168.88.128:8000/points")
      .then((res) => res.json())
      .then((json) => {
         //console.log("data ",json);
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
         data: {content: "Турист", title: ""},
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
         dataa['features'][i]['properties']['hintContent'] = " "
         dataa.features[i].geometry.coordinates[0] = points[i]["Координаты"].split(",")[0]
         dataa.features[i].geometry.coordinates[1] = points[i]["Координаты"].split(",")[1]
         dataa['features'][i]['options']['preset'] = dots[points[i]['Тип']]
         dataa['features'][i]['properties']['clusterCaption'] = points[i]['Сопредельное государство']
      }
   }

   map.events.add("click", function (e) {
      
      coordsi=0
      map.geoObjects.remove(placemark)
      coordsi = e.get("coords")
      var placemark = new ymaps.Placemark(coordsi, {
         balloonContent: 'цвет <strong>воды пляжа бонди</strong>'
     }, {
        preset: 'islands#icon',
        iconColor: '#0095b6'
      })
     map.geoObjects.add(placemark)

   })

   function addmap(){
      map.controls.add(switchPointsButton)
         map.geoObjects.add(objectManager)
         map.controls.add(control);
         map.controls.add(regionControl);
         map.controls.add(mySearchControl, { float: 'right' });
      }
      
addmap()
   
}


function CustomSearchProvider(points) {
   this.points = points;
}

// Провайдер ищет по полю text стандартным методом String.ptototype.indexOf.
CustomSearchProvider.prototype.geocode = function (request, options) {
   console.log(request);
   var deferred = new ymaps.vow.defer(),
       geoObjects = new ymaps.GeoObjectCollection(),
   // Сколько результатов нужно пропустить.
       offset = options.skip || 0,
   // Количество возвращаемых результатов.
       limit = options.results || 50;
       
   var points = []
   var punkts=[]
   var punktsL=[],
   mpp=true,
   jpp=true
   
   // Ищем в свойстве text каждого элемента массива.
   for (var i = 0, l = this.points.length; i < l; i++) {
      var point = this.points[i];
      if (point.properties.iconCaption.toLowerCase().indexOf(request.toLowerCase()) != -1) {
         points.push(point);
      }
      if (point.properties.clusterCaption.toLowerCase().indexOf(request.toLowerCase()) != -1) {
         points.push(point);
      }
      if (point.properties.clusterCaption.toLowerCase() === "не применимо") {
         points.push(point);
      }
   }
   
   // При формировании ответа можно учитывать offset и limit.
   //points = points.splice(offset, limit);
   // Добавляем точки в результирующую коллекцию.
   for (var i = 0, l = points.length; i < l; i++) {
      var point = points[i],
         coords = point.geometry.coordinates,
            text = point.properties.iconCaption,
               type = point.properties.balloonContent;

       geoObjects.add(new ymaps.Placemark(coords, {
           name: text + type,
           description: text + ' description',
           balloonContentBody: '<p>' + text + '</p>',
           boundedBy: [coords, coords]
       }));
   }
   var pc=0
   ymaps.geolocation.get()
   .then(res => {

      pc = res.geoObjects.position
      //console.log(pc);
      addroute(pc,coordsi)
   })

   function addroute(pc,coordsii) {
      
      // console.log(punktsL.length);
      // console.log(points.length);
      
      //    if(mpp){
      //       console.log("mpp");
      //       for (var i = 0; i < points.length; i++) {
               
      //          if(points[i].properties.balloonContent == "МАПП"){
      //             console.log("mpptr");
      //             var multiRoute = new ymaps.multiRouter.MultiRoute({
      //                referencePoints: [
      //                pc,
      //                point.geometry.coordinates
      //                ]
      //             })
      //             console.log("hhhh");
      //             map.geoObjects.add(multiRoute);
      //             points.splice(i, 1);
      //             mpp=false
      //          }
      //       }
            
      //    }
      //    console.log(points.length);

      //    if(jpp){
      //       console.log("jpp");
      //       for (var i = 0; i < points.length; i++) {
      //          console.log("jpp1");
      //          if(points[i].properties.balloonContent == "ЖДПП"){
      //             var multiRoute = new ymaps.multiRouter.MultiRoute({
      //                referencePoints: [
      //                pc,
      //                point.geometry.coordinates
      //                ]
      //             })
      //             console.log("aaa");
      //             map.geoObjects.add(multiRoute);
      //             points.splice(i, 1);
      //             jpp=false
      //          }
      //       }
            
      //    }
      

         console.log(points.length);
         deletechild(map.geoObjects._parentArray._baseArrayComponent._children,collection);
         
      for (var i = 0; i < points.length; i++) {
         //map.destroy();
         //console.log(map.geoObjects.getLength());
         
         
         
         var point = points[i] 
        
         new ymaps.route([
            coordsii,
            point.geometry.coordinates
         ],
         {
            build: function() {
              layout.superclass.build.call(this);
              alert("aaaa")
              document.getElementById('remove-placemark').addEventListener('click', this.onRemove);
            },
            clear: function() {
              document.getElementById('remove-placemark').removeEventListener('click', this.onRemove);
              layout.superclass.clear.call(this);
            },
            onRemove: function() {
              alert('Удаление метки с id ' + point.id);
              // post на сервер
              myCollection.remove(placemark);
            }
          }).then(route => {
            punkts.push(route);
            //console.log(punkts);
            collection = new ymaps.GeoObjectCollection();
            collection.add(route);
            
            
            map.geoObjects.add(collection);
         })

         
         
      
      }
      
      for (let index = 0; index < map.geoObjects.getLength(); index++) {
         //console.log(punkts[0]);
         //console.log(1);   
         // console.log(map.geoObjects.indexOf(singleRoute))
         // console.log(map.geoObjects.indexOf(route))
         // console.log(map.geoObjects.indexOf("singleRoute"))
         // console.log(map.geoObjects.indexOf("route"))
         
         //map.geoObjects.removeAll()
         //addmap()
         
      }


      //console.log("hahahaha");
      //while(){map.geoObjects.remove(singleRoute);
      //}
      //console.log(map.geoObjects._parentArray._baseArrayComponent._children.length);
   }

   function deletechild(childs,coll){
      console.log(1);
      //for (let index = 0; index < childs.length; index++) {
         
         if(childs.length>3) {
            //console.log(childs[index])
            console.log(childs.length);
            childs.splice(2,childs.length-2)
            
            for (let index = 2; index < childs.length; index++) {
               map.geoObjects.remove(index)
            }
            //console.log(coll[2])
         }

      //}
      
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

   function min(array){
      console.log(array.length);
      min = myArray[0];
      for (i = 1; i < array.length; ++i) {
         if (array[i] < min) min = array[i];
     }
     console.log(2);
     return min
   }
};

ymaps.ready(init);

function addroutemap(arr1,arr2){
console.log(1);
//map.geoObjects.add(arr1);
}
