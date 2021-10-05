// 1.Dəyişkən adları mənalı və anlaşıqlı olmalıdır.
// 2.Dəyişkən adlarını yazarkən İngilis əlifbasından başqa əlifba istifadə etmək qadağandır.
// 3.Dəyişkən adları _ (alt xətt) ilə başlaya bilər.
// 4.Dəyişkən adları $(dollar) işarəsi ilə başlaya bilər.
// 5.Dəyişkən adları heç bir zaman rəqəm ilə başlaya bilməz.Amma ilk hərfdən sonra istifadə edə bilərik.
// 6.Dəyişkən adları böyük-kiçik hərflərə həssasdır.
// 7.Eyni dəyişkənə iki fərqli məlumat tanımlanan zaman sonuncu tanımlanan məlumatı göstərir.
// 8.JavaScript tərəfindən hazırlanmış rezerv kəlimələri dəyişkən adlarına vermək qadağandır.
// 9.Eyni dəyişkən adını dəişkən ifadələrində istifadə etmək qadağandır.

// abstract 	    arguments	    await*	            boolean
// break	        byte	        case	            catch
// char	            class*	        const	            continue
// debugger	        default	        delete	            do
// double	        else	        enum*	            eval
// export*	        extends*	    false	            final
// finally	        float	        for	                function
// goto	            if	            implements	        import*
// in	            instanceof	    int	                interface
// let*	            long	        native	            new
// null	            package	        private	            protected
// public	        return	        short	            static
// super*	        switch	        synchronized	    this
// throw	        throws	        transient	        true
// try	            typeof	        var	                void
// volatile	        while	        with	            yield

var infoData = "Hello Front";
var infoData = "Hello Front1";
// console.log(infoData);

// ----------------------------------------------------------------------------------------------------
// var     infoVar        = "Variable";
// const   infoConst      = "Constant";
// let     infoLet        = "Let";

// var     infoVar        = "Variable1";
// const   infoConst      = "Constant1";
// let     infoLet        = "Let1";

// document.write(infoLet);
// ----------------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------------
// Local
// Global
// Local Global

const infoFront = 1;
// infoFront = "Hello";
// console.log(infoFront);

//global

if (true) {
  //local
}
// ---------------------------------------------------
if (true) {
  //local

  if (true) {
    //local global
    if (true) {
      //local global

      if (true) {
        //local
        var globalVar = "Global";
      }

    //   console.log(globalVar);
    }
  }
}

// const infoMin = 40;
// const infoMax = 10;

// if (infoMin < infoMax) {
//   console.log("Yehuu !!! Im runing...");
// } else if (infoMin === 50) {
//   console.log("Yehuu !!! Im runing... 50");
// } else if (infoMin === 40) {
//   console.log("Yehuu !!! Im runing... 40");
// } else {
//   console.log("Its Wrong... :(");
// }

const nowTime = 10;

if (nowTime >= 7 && nowTime <= 10) {
  console.log("Good Morning...");
        if (nowTime === 9) {
            console.log("Do Breakfast!");
        }else if(nowTime === 10){
            console.log("Go to Work");
        }
} else if (nowTime > 10 && nowTime <= 17) {
  console.log("Good Afternoon...");

} else if (nowTime > 17 && nowTime <= 23) {
  console.log("Good Evening...");

} else if (nowTime === 0 || nowTime < 7) {
  console.log("Adeee go to sleep...");

} else {
  console.log("No Time");
}
