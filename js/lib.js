/*! Generate by Moelody. Wed Sep  9 16:53:33 2020*/
(function(p){p.fn.circleMagic=function(t){var o,a,n,r,e=!0,i=[],d=p.extend({color:"rgba(255,0,0,.5)",radius:10,density:0.3,clearOffset:0.2},t),l=this[0];function c(){e=!(document.body.scrollTop>a);}
function s(){(o=l.clientWidth),(a=l.clientHeight),(l.height=a+"px"),(n.width=o),(n.height=a);}
function h(){if(e)for(var t in(r.clearRect(0,0,o,a),i))i[t].draw();requestAnimationFrame(h);}
function f(){var t=this;function e(){(t.pos.x=Math.random()*o),(t.pos.y=a+100*Math.random()),(t.alpha=0.1+Math.random()*d.clearOffset),(t.scale=0.1+0.3*Math.random()),(t.speed=Math.random()),"random"===d.color?(t.color="rgba("+
Math.floor(255*Math.random())+
", "+
Math.floor(0*Math.random())+
", "+
Math.floor(0*Math.random())+
", "+
Math.random().toPrecision(2)+
")"):(t.color=d.color);}
(t.pos={}),e(),(this.draw=function(){t.alpha<=0&&e(),(t.pos.y-=t.speed),(t.alpha-=5e-4),r.beginPath(),r.arc(t.pos.x,t.pos.y,t.scale*d.radius,0,2*Math.PI,!1),(r.fillStyle=t.color),r.fill(),r.closePath();});}!(function(){(o=l.offsetWidth),(a=l.offsetHeight),(function(){var t=document.createElement("canvas");(t.id="canvas"),(t.style.top=0),(t.style.zIndex=0),(t.style.pointerEvents="none"),(t.style.position="absolute"),l.appendChild(t),(t.parentElement.style.overflow="hidden");})(),((n=document.getElementById("canvas")).width=o),(n.height=a),(r=n.getContext("2d"));for(var t=0;t<o*d.density;t++){var e=new f();i.push(e);}
h();})(),window.addEventListener("scroll",c,!1),window.addEventListener("resize",s,!1);};})(jQuery);(function(){$("#page-header").circleMagic({radius:10,density:0.2,color:"rgba(255,255,255,.4)",clearOffset:0.99});})();(function($){var calLanguages={ar:{months:['كانون الثاني','شباط','آذار','نيسان','مايو','حزيران','تموز','آب','أيلول','تشرين الأول','تشرين الثاني','كانون الأول'],dayOfWeekShort:['ن','ث','ع','خ','ج','س','ح'],dayOfWeek:['الأحد','الاثنين','الثلاثاء','الأربعاء','الخميس','الجمعة','السبت','الأحد']},ro:{months:['Ianuarie','Februarie','Martie','Aprilie','Mai','Iunie','Iulie','August','Septembrie','Octombrie','Noiembrie','Decembrie'],dayOfWeekShort:['Du','Lu','Ma','Mi','Jo','Vi','Sâ'],dayOfWeek:['Duminică','Luni','Marţi','Miercuri','Joi','Vineri','Sâmbătă']},id:{months:['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'],dayOfWeekShort:['Min','Sen','Sel','Rab','Kam','Jum','Sab'],dayOfWeek:['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu']},is:{months:['Janúar','Febrúar','Mars','Apríl','Maí','Júní','Júlí','Ágúst','September','Október','Nóvember','Desember'],dayOfWeekShort:['Sun','Mán','Þrið','Mið','Fim','Fös','Lau'],dayOfWeek:['Sunnudagur','Mánudagur','Þriðjudagur','Miðvikudagur','Fimmtudagur','Föstudagur','Laugardagur']},bg:{months:['Януари','Февруари','Март','Април','Май','Юни','Юли','Август','Септември','Октомври','Ноември','Декември'],dayOfWeekShort:['Нд','Пн','Вт','Ср','Чт','Пт','Сб'],dayOfWeek:['Неделя','Понеделник','Вторник','Сряда','Четвъртък','Петък','Събота']},fa:{months:['فروردین','اردیبهشت','خرداد','تیر','مرداد','شهریور','مهر','آبان','آذر','دی','بهمن','اسفند'],dayOfWeekShort:['یکشنبه','دوشنبه','سه شنبه','چهارشنبه','پنجشنبه','جمعه','شنبه'],dayOfWeek:['یک‌شنبه','دوشنبه','سه‌شنبه','چهارشنبه','پنج‌شنبه','جمعه','شنبه','یک‌شنبه']},ru:{months:['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],dayOfWeekShort:['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],dayOfWeek:['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота']},uk:{months:['Січень','Лютий','Березень','Квітень','Травень','Червень','Липень','Серпень','Вересень','Жовтень','Листопад','Грудень'],dayOfWeekShort:['Ндл','Пнд','Втр','Срд','Чтв','Птн','Сбт'],dayOfWeek:['Неділя','Понеділок','Вівторок','Середа','Четвер','П\'ятниця','Субота']},en:{months:['January','February','March','April','May','June','July','August','September','October','November','December'],dayOfWeekShort:['S','M','T','W','T','F','S'],dayOfWeek:['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],postsMonthTip:'Posts published in LMM yyyy',titleFormat:'LMM yyyy'},el:{months:['Ιανουάριος','Φεβρουάριος','Μάρτιος','Απρίλιος','Μάιος','Ιούνιος','Ιούλιος','Αύγουστος','Σεπτέμβριος','Οκτώβριος','Νοέμβριος','Δεκέμβριος'],dayOfWeekShort:['Κυρ','Δευ','Τρι','Τετ','Πεμ','Παρ','Σαβ'],dayOfWeek:['Κυριακή','Δευτέρα','Τρίτη','Τετάρτη','Πέμπτη','Παρασκευή','Σάββατο']},de:{months:['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'],dayOfWeekShort:['So','Mo','Di','Mi','Do','Fr','Sa'],dayOfWeek:['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag']},nl:{months:['januari','februari','maart','april','mei','juni','juli','augustus','september','oktober','november','december'],dayOfWeekShort:['zo','ma','di','wo','do','vr','za'],dayOfWeek:['zondag','maandag','dinsdag','woensdag','donderdag','vrijdag','zaterdag']},tr:{months:['Ocak','Şubat','Mart','Nisan','Mayıs','Haziran','Temmuz','Ağustos','Eylül','Ekim','Kasım','Aralık'],dayOfWeekShort:['Paz','Pts','Sal','Çar','Per','Cum','Cts'],dayOfWeek:['Pazar','Pazartesi','Salı','Çarşamba','Perşembe','Cuma','Cumartesi']},fr:{months:['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],dayOfWeekShort:['Dim','Lun','Mar','Mer','Jeu','Ven','Sam'],dayOfWeek:['dimanche','lundi','mardi','mercredi','jeudi','vendredi','samedi']},es:{months:['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],dayOfWeekShort:['Dom','Lun','Mar','Mié','Jue','Vie','Sáb'],dayOfWeek:['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado']},th:{months:['มกราคม','กุมภาพันธ์','มีนาคม','เมษายน','พฤษภาคม','มิถุนายน','กรกฎาคม','สิงหาคม','กันยายน','ตุลาคม','พฤศจิกายน','ธันวาคม'],dayOfWeekShort:['อา.','จ.','อ.','พ.','พฤ.','ศ.','ส.'],dayOfWeek:['อาทิตย์','จันทร์','อังคาร','พุธ','พฤหัส','ศุกร์','เสาร์','อาทิตย์']},pl:{months:['styczeń','luty','marzec','kwiecień','maj','czerwiec','lipiec','sierpień','wrzesień','październik','listopad','grudzień'],dayOfWeekShort:['nd','pn','wt','śr','cz','pt','sb'],dayOfWeek:['niedziela','poniedziałek','wtorek','środa','czwartek','piątek','sobota']},pt:{months:['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],dayOfWeekShort:['Dom','Seg','Ter','Qua','Qui','Sex','Sab'],dayOfWeek:['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado']},ch:{months:['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],dayOfWeekShort:['日','一','二','三','四','五','六']},se:{months:['Januari','Februari','Mars','April','Maj','Juni','Juli','Augusti','September','Oktober','November','December'],dayOfWeekShort:['Sön','Mån','Tis','Ons','Tor','Fre','Lör']},kr:{months:['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],dayOfWeekShort:['일','월','화','수','목','금','토'],dayOfWeek:['일요일','월요일','화요일','수요일','목요일','금요일','토요일']},it:{months:['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'],dayOfWeekShort:['Dom','Lun','Mar','Mer','Gio','Ven','Sab'],dayOfWeek:['Domenica','Lunedì','Martedì','Mercoledì','Giovedì','Venerdì','Sabato']},da:{months:['January','Februar','Marts','April','Maj','Juni','July','August','September','Oktober','November','December'],dayOfWeekShort:['Søn','Man','Tir','Ons','Tor','Fre','Lør'],dayOfWeek:['søndag','mandag','tirsdag','onsdag','torsdag','fredag','lørdag']},no:{months:['Januar','Februar','Mars','April','Mai','Juni','Juli','August','September','Oktober','November','Desember'],dayOfWeekShort:['Søn','Man','Tir','Ons','Tor','Fre','Lør'],dayOfWeek:['Søndag','Mandag','Tirsdag','Onsdag','Torsdag','Fredag','Lørdag']},ja:{months:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],dayOfWeekShort:['日','月','火','水','木','金','土'],dayOfWeek:['日曜','月曜','火曜','水曜','木曜','金曜','土曜']},vi:{months:['Tháng 1','Tháng 2','Tháng 3','Tháng 4','Tháng 5','Tháng 6','Tháng 7','Tháng 8','Tháng 9','Tháng 10','Tháng 11','Tháng 12'],dayOfWeekShort:['CN','T2','T3','T4','T5','T6','T7'],dayOfWeek:['Chủ nhật','Thứ hai','Thứ ba','Thứ tư','Thứ năm','Thứ sáu','Thứ bảy']},sl:{months:['Januar','Februar','Marec','April','Maj','Junij','Julij','Avgust','September','Oktober','November','December'],dayOfWeekShort:['Ned','Pon','Tor','Sre','Čet','Pet','Sob'],dayOfWeek:['Nedelja','Ponedeljek','Torek','Sreda','Četrtek','Petek','Sobota']},cs:{months:['Leden','Únor','Březen','Duben','Květen','Červen','Červenec','Srpen','Září','Říjen','Listopad','Prosinec'],dayOfWeekShort:['Ne','Po','Út','St','Čt','Pá','So']},hu:{months:['Január','Február','Március','Április','Május','Június','Július','Augusztus','Szeptember','Október','November','December'],dayOfWeekShort:['Va','Hé','Ke','Sze','Cs','Pé','Szo'],dayOfWeek:['vasárnap','hétfő','kedd','szerda','csütörtök','péntek','szombat']},az:{months:['Yanvar','Fevral','Mart','Aprel','May','Iyun','Iyul','Avqust','Sentyabr','Oktyabr','Noyabr','Dekabr'],dayOfWeekShort:['B','Be','Ça','Ç','Ca','C','Ş'],dayOfWeek:['Bazar','Bazar ertəsi','Çərşənbə axşamı','Çərşənbə','Cümə axşamı','Cümə','Şənbə']},bs:{months:['Januar','Februar','Mart','April','Maj','Jun','Jul','Avgust','Septembar','Oktobar','Novembar','Decembar'],dayOfWeekShort:['Ned','Pon','Uto','Sri','Čet','Pet','Sub'],dayOfWeek:['Nedjelja','Ponedjeljak','Utorak','Srijeda','Četvrtak','Petak','Subota']},ca:{months:['Gener','Febrer','Març','Abril','Maig','Juny','Juliol','Agost','Setembre','Octubre','Novembre','Desembre'],dayOfWeekShort:['Dg','Dl','Dt','Dc','Dj','Dv','Ds'],dayOfWeek:['Diumenge','Dilluns','Dimarts','Dimecres','Dijous','Divendres','Dissabte']},'en-GB':{months:['January','February','March','April','May','June','July','August','September','October','November','December'],dayOfWeekShort:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],dayOfWeek:['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']},et:{months:['Jaanuar','Veebruar','Märts','Aprill','Mai','Juuni','Juuli','August','September','Oktoober','November','Detsember'],dayOfWeekShort:['P','E','T','K','N','R','L'],dayOfWeek:['Pühapäev','Esmaspäev','Teisipäev','Kolmapäev','Neljapäev','Reede','Laupäev']},eu:{months:['Urtarrila','Otsaila','Martxoa','Apirila','Maiatza','Ekaina','Uztaila','Abuztua','Iraila','Urria','Azaroa','Abendua'],dayOfWeekShort:['Ig.','Al.','Ar.','Az.','Og.','Or.','La.'],dayOfWeek:['Igandea','Astelehena','Asteartea','Asteazkena','Osteguna','Ostirala','Larunbata']},fi:{months:['Tammikuu','Helmikuu','Maaliskuu','Huhtikuu','Toukokuu','Kesäkuu','Heinäkuu','Elokuu','Syyskuu','Lokakuu','Marraskuu','Joulukuu'],dayOfWeekShort:['Su','Ma','Ti','Ke','To','Pe','La'],dayOfWeek:['sunnuntai','maanantai','tiistai','keskiviikko','torstai','perjantai','lauantai']},gl:{months:['Xan','Feb','Maz','Abr','Mai','Xun','Xul','Ago','Set','Out','Nov','Dec'],dayOfWeekShort:['Dom','Lun','Mar','Mer','Xov','Ven','Sab'],dayOfWeek:['Domingo','Luns','Martes','Mércores','Xoves','Venres','Sábado']},hr:{months:['Siječanj','Veljača','Ožujak','Travanj','Svibanj','Lipanj','Srpanj','Kolovoz','Rujan','Listopad','Studeni','Prosinac'],dayOfWeekShort:['Ned','Pon','Uto','Sri','Čet','Pet','Sub'],dayOfWeek:['Nedjelja','Ponedjeljak','Utorak','Srijeda','Četvrtak','Petak','Subotagg']},ko:{months:['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],dayOfWeekShort:['일','월','화','수','목','금','토'],dayOfWeek:['일요일','월요일','화요일','수요일','목요일','금요일','토요일']},lt:{months:['Sausio','Vasario','Kovo','Balandžio','Gegužės','Birželio','Liepos','Rugpjūčio','Rugsėjo','Spalio','Lapkričio','Gruodžio'],dayOfWeekShort:['Sek','Pir','Ant','Tre','Ket','Pen','Šeš'],dayOfWeek:['Sekmadienis','Pirmadienis','Antradienis','Trečiadienis','Ketvirtadienis','Penktadienis','Šeštadienis']},lv:{months:['Janvāris','Februāris','Marts','Aprīlis ','Maijs','Jūnijs','Jūlijs','Augusts','Septembris','Oktobris','Novembris','Decembris'],dayOfWeekShort:['Sv','Pr','Ot','Tr','Ct','Pk','St'],dayOfWeek:['Svētdiena','Pirmdiena','Otrdiena','Trešdiena','Ceturtdiena','Piektdiena','Sestdiena']},mk:{months:['јануари','февруари','март','април','мај','јуни','јули','август','септември','октомври','ноември','декември'],dayOfWeekShort:['нед','пон','вто','сре','чет','пет','саб'],dayOfWeek:['Недела','Понеделник','Вторник','Среда','Четврток','Петок','Сабота']},mn:{months:['1-р сар','2-р сар','3-р сар','4-р сар','5-р сар','6-р сар','7-р сар','8-р сар','9-р сар','10-р сар','11-р сар','12-р сар'],dayOfWeekShort:['Дав','Мяг','Лха','Пүр','Бсн','Бям','Ням'],dayOfWeek:['Даваа','Мягмар','Лхагва','Пүрэв','Баасан','Бямба','Ням']},'pt-BR':{months:['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],dayOfWeekShort:['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'],dayOfWeek:['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado']},sk:{months:['Január','Február','Marec','Apríl','Máj','Jún','Júl','August','September','Október','November','December'],dayOfWeekShort:['Ne','Po','Ut','St','Št','Pi','So'],dayOfWeek:['Nedeľa','Pondelok','Utorok','Streda','Štvrtok','Piatok','Sobota']},sq:{months:['Janar','Shkurt','Mars','Prill','Maj','Qershor','Korrik','Gusht','Shtator','Tetor','Nëntor','Dhjetor'],dayOfWeekShort:['Die','Hën','Mar','Mër','Enj','Pre','Shtu'],dayOfWeek:['E Diel','E Hënë','E Martē','E Mërkurë','E Enjte','E Premte','E Shtunë']},'sr-YU':{months:['Januar','Februar','Mart','April','Maj','Jun','Jul','Avgust','Septembar','Oktobar','Novembar','Decembar'],dayOfWeekShort:['Ned','Pon','Uto','Sre','čet','Pet','Sub'],dayOfWeek:['Nedelja','Ponedeljak','Utorak','Sreda','Četvrtak','Petak','Subota']},sr:{months:['јануар','фебруар','март','април','мај','јун','јул','август','септембар','октобар','новембар','децембар'],dayOfWeekShort:['нед','пон','уто','сре','чет','пет','суб'],dayOfWeek:['Недеља','Понедељак','Уторак','Среда','Четвртак','Петак','Субота']},sv:{months:['Januari','Februari','Mars','April','Maj','Juni','Juli','Augusti','September','Oktober','November','December'],dayOfWeekShort:['Sön','Mån','Tis','Ons','Tor','Fre','Lör'],dayOfWeek:['Söndag','Måndag','Tisdag','Onsdag','Torsdag','Fredag','Lördag']},'zh-TW':{months:['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],dayOfWeekShort:['日','一','二','三','四','五','六'],dayOfWeek:['星期日','星期一','星期二','星期三','星期四','星期五','星期六']},'zh-CN':{months:['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],dayOfWeekShort:['日','一','二','三','四','五','六'],dayOfWeek:['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],postsMonthTip:'查看yyyy年MM月的文章',titleFormat:'yyyy年MM月'},he:{months:['ינואר','פברואר','מרץ','אפריל','מאי','יוני','יולי','אוגוסט','ספטמבר','אוקטובר','נובמבר','דצמבר'],dayOfWeekShort:['א\'','ב\'','ג\'','ד\'','ה\'','ו\'','שבת'],dayOfWeek:['ראשון','שני','שלישי','רביעי','חמישי','שישי','שבת','ראשון']},hy:{months:['Հունվար','Փետրվար','Մարտ','Ապրիլ','Մայիս','Հունիս','Հուլիս','Օգոստոս','Սեպտեմբեր','Հոկտեմբեր','Նոյեմբեր','Դեկտեմբեր'],dayOfWeekShort:['Կի','Երկ','Երք','Չոր','Հնգ','Ուրբ','Շբթ'],dayOfWeek:['Կիրակի','Երկուշաբթի','Երեքշաբթի','Չորեքշաբթի','Հինգշաբթի','Ուրբաթ','Շաբաթ']},kg:{months:['Үчтүн айы','Бирдин айы','Жалган Куран','Чын Куран','Бугу','Кулжа','Теке','Баш Оона','Аяк Оона','Тогуздун айы','Жетинин айы','Бештин айы'],dayOfWeekShort:['Жек','Дүй','Шей','Шар','Бей','Жум','Ише'],dayOfWeek:['Жекшемб','Дүйшөмб','Шейшемб','Шаршемб','Бейшемби','Жума','Ишенб']},rm:{months:['Schaner','Favrer','Mars','Avrigl','Matg','Zercladur','Fanadur','Avust','Settember','October','November','December'],dayOfWeekShort:['Du','Gli','Ma','Me','Gie','Ve','So'],dayOfWeek:['Dumengia','Glindesdi','Mardi','Mesemna','Gievgia','Venderdi','Sonda']},ka:{months:['იანვარი','თებერვალი','მარტი','აპრილი','მაისი','ივნისი','ივლისი','აგვისტო','სექტემბერი','ოქტომბერი','ნოემბერი','დეკემბერი'],dayOfWeekShort:['კვ','ორშ','სამშ','ოთხ','ხუთ','პარ','შაბ'],dayOfWeek:['კვირა','ორშაბათი','სამშაბათი','ოთხშაბათი','ხუთშაბათი','პარასკევი','შაბათი']},};var aCalendar=function(language,options,object){var now=new Date();var nDay=now.getDate();var nMonth=now.getMonth();var nYear=now.getFullYear();var dDay=nDay;var dMonth=nMonth;var dYear=nYear;var instance=object;var allPosts=null;var months=null;var current={posts:[],prev:null,next:null};var currentLanguage='en';initLanguage(language);var settings=$.extend({},$.fn.aCalendar.defaults,typeof calLanguages==='undefined'?{}:calLanguages[currentLanguage],options);if(settings.root[0]!=='/'){settings.root='/'+settings.root;}
if(settings.root[settings.root.length-1]!=='/'){settings.root+='/';}
function initLanguage(key){if(key&&typeof calLanguages!=='undefined'&&calLanguages[key]){currentLanguage=key;}}
function nextMonth(){if(dMonth<11){dMonth++;}else{dMonth=0;dYear++;}
draw();};function previousMonth(){if(dMonth>0){dMonth--;}else{dMonth=11;dYear--;}
draw();};function toPostsMonth(date){if(date){dYear=date.getFullYear();dMonth=date.getMonth();draw();}}
function loadPosts(){if(settings.single){loadAllPosts();}else{loadPostsByMonth();}}
function loadAllPosts(){if(settings.url!=null&&settings.url!=''){if(allPosts===null){$.ajax({url:settings.url,async:false,success:function(data){allPosts=data;initMonths(Object.keys(allPosts));}});}
if(allPosts!==null){if(parse()){current.posts=allPosts[dYear+'-'+(dMonth+1)];}}}}
function loadPostsByMonth(){if(months===null){$.ajax({url:settings.root+'list.json',async:false,success:function(data){initMonths(data);}});}
if(parse()){$.ajax({url:settings.root+dYear+'-'+(dMonth+1)+'.json',async:false,success:function(data){current.posts=data;}});}}
function initMonths(array){months=array.map(function(item){var ym=item.split('-');return new Date(Date.UTC(+ym[0],+ym[1]-1));});}
function parse(){var time=Date.UTC(dYear,dMonth);if(months===null||months.length===0){return false;}
if(current.posts.length===0&&(current.prev===null&&current.next!==null&&current.next.getTime()>time||current.next===null&&current.prev!==null&&current.prev.getTime()<time)){return false;}
current.posts=[];for(var i=0;i<months.length;i++){var cTime=months[i].getTime();if(time===cTime){current.prev=i===0?null:months[i-1];current.next=i===months.length-1?null:months[i+1];return true;}else if(time<cTime){current.prev=i===0?null:months[i-1];current.next=months[i];break;}else{current.prev=months[i];current.next=null;}}
return false;}
function simpleDateFormat(date,fmt){var o={'LMM+':settings.months[date.getMonth()],'MM+':date.getMonth()+1};if(/(y+)/.test(fmt)){fmt=fmt.replace(RegExp.$1,(date.getFullYear()+'').substr(4-RegExp.$1.length));}
for(var k in o){if(new RegExp('('+k+')').test(fmt)){fmt=fmt.replace(RegExp.$1,(k==='LMM+')?(o[k]):(('00'+o[k]).substr((''+o[k]).length)));}}
return fmt;}
function draw(){loadPosts();var dWeekDayOfMonthStart=new Date(dYear,dMonth,1).getDay()-settings.weekOffset;if(dWeekDayOfMonthStart<=0){dWeekDayOfMonthStart=6-((dWeekDayOfMonthStart+1)*-1);}
var dLastDayOfMonth=new Date(dYear,dMonth+1,0).getDate();var dLastDayOfPreviousMonth=new Date(dYear,dMonth,0).getDate()-dWeekDayOfMonthStart+1;var cHead=$('<div/>').addClass('cal-head');var cNext=$('<div/>');var cPrevious=$('<div/>');var cTitle=$('<div/>').addClass('cal-title');cPrevious.html(settings.headArrows.previous);cNext.html(settings.headArrows.next);curDate=new Date(Date.UTC(dYear,dMonth));if(current.posts.length===0){cTitle.html(simpleDateFormat(curDate,settings.titleFormat));}else{cTitleLink=$('<a/>').attr('href',simpleDateFormat(curDate,settings.titleLinkFormat)).attr('title',simpleDateFormat(curDate,settings.postsMonthTip)).html(simpleDateFormat(curDate,settings.titleFormat));cTitle.html(cTitleLink);}
cPrevious.on('click',previousMonth);cNext.on('click',nextMonth);cHead.append(cPrevious);cHead.append(cTitle);cHead.append(cNext);var cBody=$('<table/>').addClass('cal');var dayOfWeek=settings.weekOffset;var cWeekHead=$('<thead/>');var cWeekHeadRow=$('<tr/>');for(var i=0;i<7;i++){if(dayOfWeek>6){dayOfWeek=0;}
var cWeekDay=$('<th/>').attr('scope','col').attr('title',settings.dayOfWeek[dayOfWeek]);cWeekDay.html(settings.dayOfWeekShort[dayOfWeek]);cWeekHeadRow.append(cWeekDay);dayOfWeek++;}
cWeekHead.append(cWeekHeadRow);cBody.append(cWeekHead);var cFoot=$('<tfoot/>');var cFootRow=$('<tr/>');var cPrevPosts=$('<td/>').attr('colspan',3);var cPad=$('<td/>').html('&nbsp;');var cNextPosts=$('<td/>').attr('colspan',3);if(current.prev){cPrevPosts.html(settings.footArrows.previous+settings.months[current.prev.getMonth()]).addClass('cal-foot').attr('title',simpleDateFormat(current.prev,settings.postsMonthTip));}
if(current.next){cNextPosts.html(settings.months[current.next.getMonth()]+settings.footArrows.next).addClass('cal-foot').attr('title',simpleDateFormat(current.next,settings.postsMonthTip));}
cPrevPosts.on('click',function(){toPostsMonth(current.prev);});cNextPosts.on('click',function(){toPostsMonth(current.next);});cFootRow.append(cPrevPosts);cFootRow.append(cPad);cFootRow.append(cNextPosts);cFoot.append(cFootRow);var cMainPad=$('<tbody/>');var day=1;var dayOfNextMonth=1;for(var i=0;i<6;i++){var cWeek=$('<tr/>');for(var j=0;j<7;j++){var cDay=$('<td/>');if(i*7+j<dWeekDayOfMonthStart){cDay.addClass('cal-gray');cDay.html(dLastDayOfPreviousMonth++);}else if(day<=dLastDayOfMonth){if(day==dDay&&nMonth==dMonth&&nYear==dYear){cDay.addClass('cal-today');}
var count={num:0,keys:[]};for(var k=0;k<current.posts.length;k++){var d=new Date(Date.parse(current.posts[k].date));if(d.getDate()==day){count.keys[count.num++]=k;}}
if(count.num!==0){var index=count.keys[0];var cLink=$('<a>').attr('href',current.posts[index].link).attr('title',current.posts[index].title).html(day++);cDay.append(cLink);}else{cDay.html(day++);}}else{cDay.addClass('cal-gray');cDay.html(dayOfNextMonth++);}
cWeek.append(cDay);}
cMainPad.append(cWeek);}
cBody.append(cWeekHead);cBody.append(cFoot);cBody.append(cMainPad);$(instance).html(cHead);$(instance).append(cBody);}
return draw();};$.fn.aCalendar=function(Lang,oInit){return this.each(function(){return aCalendar(Lang,oInit,$(this));});};$.fn.aCalendar.defaults={months:['January','February','March','April','May','June','July','August','September','October','November','December'],dayOfWeekShort:['S','M','T','W','T','F','S'],dayOfWeek:['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],postsMonthTip:'Posts published in LMM yyyy',titleFormat:'yyyy LMM',titleLinkFormat:'/archives/yyyy/MM/',headArrows:{previous:'<span class="cal-prev"></span>',next:'<span class="cal-next"></span>'},footArrows:{previous:'« ',next:' »'},weekOffset:0,single:true,root:'/calendar/'};$(document).ready(function(){var lang='zh-CN';var doclang='';try{doclang=JSON.parse($('html').attr('lang'))[0];}catch(e){doclang=$('html').attr('lang');}
if(calLanguages.hasOwnProperty(doclang))
lang=doclang;$('#calendar').aCalendar(lang);});}(jQuery));(function(){if(saveToLocal.get("bg")){let web_bg=document.getElementById("web_bg");let animation=saveToLocal.get("animation");let type=saveToLocal.get("type");web_bg.style.background=saveToLocal.get("bg");web_bg.setAttribute("data-type",type);if(animation){web_bg.style.animation=animation;}}
const cardStyle=document.createElement('style');cardStyle.innerHTML=`[data-theme=light]{--card-bg:rgb(255,255,255,${saveToLocal.get("opacity")||0.9});}
[data-theme=dark]{--card-bg:rgb(18,18,18,${saveToLocal.get("opacity")||0.9});}`;document.head.appendChild(cardStyle);})();(function(){$(document).ready(function(e){$(".copyright").html('©2020 <i style="color:#FF6A6A;animation: announ_animation 0.8s linear infinite;" class="fas fa-heartbeat"></i> Moelody');});})();/*!
 * online
 * Copyright(c) 2016 luojia <luojia@luojia.me>
 * MIT Licensed
 */
if(typeof Online=="undefined"){class Online{constructor(addr){this.addr=addr;this.groups=new Set();this.on=false;this.waiting=false;this.onOnlineChange=null;this.pinger=setInterval(()=>{this.opened&&this.ws.send('');},20000);this.user=`${conv(Date.now(),10,62)}-${randomUser()}`;this.ws=null;if(window.localStorage){var user=localStorage.getItem('online_user');if(!user)localStorage.setItem('online_user',this.user);else{this.user=user;}}
if(addr){this.on=true;this.connet();}}
get opened(){return this.ws&&this.ws.readyState===1;}
enter(name){if(typeof name!=='string')throw('name is not a string:'+name);this.groups.add(name);if(this.opened)
this.ws.send(JSON.stringify({_:'enter',g:name,u:this.user}));return this;}
leave(name){if(typeof name!=='string')throw('name is not a string:'+name);if(this.opened&&this.groups.delete(name)){this.ws.send(JSON.stringify({_:'leave',g:name}));}
return this;}
leaveAll(){if(this.opened)
for(let g of this.groups)this.leave(g);return this;}
_report(data){this.onOnlineChange&&this.onOnlineChange(data);}
connet(addr){this.waiting=false;if(addr)this.addr=addr;if(this.on===false)return;if(this.opened)return;let ws=this.ws=new WebSocket(this.addr);ws.onmessage=m=>{if(m.data==='connected'){for(let g of this.groups)this.enter(g);return;}
let msg=JSON.parse(m.data);switch(msg._){case'ol':{msg.c=parseInt(msg.c,32);msg.u=parseInt(msg.u,32);this._report(msg);break;}}};ws.onclose=e=>{if(this.waiting)return;for(let g of this.groups)this._report({g:g,c:0,u:0});this.waiting=true;setTimeout(()=>{this.connet()},5000);};ws.onerror=e=>{ws.onclose();};return this;}
close(){this.on=false;this.ws.close();clearInterval(this.pinger);}}}
function randomUser(){return conv(Math.round(99999999*Math.random()),10,62);}
function conv(n,o,t,olist,tlist){var dlist='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',tnum=[],m,negative=((n+='').trim()[0]=='-'),decnum=0;olist||(olist=dlist);tlist||(tlist=dlist);if(negative)n=n.slice(1);for(var i=n.length;i--;)
decnum+=olist.indexOf(n[i])*Math.pow(o,n.length-i-1);for(;decnum!=0;tnum.unshift(tlist[m])){m=decnum%t;decnum=Math.floor(decnum/t);}
decnum&&tnum.unshift(tlist[decnum]);return(negative?'-':'')+tnum.join('');}
function isMobile(){return window.screen.width<767&&/iPad|iPhone|Android|Opera Mini|BlackBerry|webOS|UCWEB|Blazer|PSP|IEMobile|Symbian/g.test(navigator.userAgent);}
(function(){if(!isMobile()){var ol=new Online('wss://api.diygod.me/online/');ol.enter(document.domain);ol.onOnlineChange=function(data){let onlineEle=document.getElementById('online-count');if(onlineEle){onlineEle.innerHTML=data.u;}else{document.getElementById('menus').insertAdjacentHTML('afterbegin',`<div id="menu_online"style="display:inline;"><a class="site-page"data-pjax-state><span id="online-count">${data.u}</span>人在线</a></div>`);}}}})()(function(){let OriginTitle=document.title;let titleTime;document.addEventListener("visibilitychange",function(){if(document.hidden){$('[rel="icon"]').attr("href","/img/favicon.ico");document.title="不要看我！！";clearTimeout(titleTime);}else{$('[rel="icon"]').attr("href","/img/favicon.ico");document.title="(*´∇｀*) 呀~"+OriginTitle;titleTime=setTimeout(function(){document.title=OriginTitle;},2000);}});})();
