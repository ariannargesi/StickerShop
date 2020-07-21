[1mdiff --git a/src/components/Input/Input.scss b/src/components/Input/Input.scss[m
[1mindex de6dd44..3094eeb 100644[m
[1m--- a/src/components/Input/Input.scss[m
[1m+++ b/src/components/Input/Input.scss[m
[36m@@ -1,6 +1,5 @@[m
 @import "src/base";[m
 .input-wrapper {[m
[31m-[m
   * {[m
     margin: 0.3rem 0;[m
     font-size: 18px;[m
[36m@@ -11,7 +10,6 @@[m
     width: 95%;[m
     color: gray;[m
     border-radius: $radius;[m
[31m-    padding: 0 0.5rem;[m
     outline: none;[m
     border: 1px solid #d4d4d4;[m
     transition: $default-transition-duration;[m
[36m@@ -25,6 +23,9 @@[m
   }[m
   label {[m
     color: gray;[m
[31m-    padding: 1rem 0 ;[m
[32m+[m[32m    width: 100%;[m
[32m+[m[32m    margin-left: 5px;[m
[32m+[m[32m    display: inline-block;[m
[32m+[m[32m    text-align: left;[m
   }[m
 }[m
\ No newline at end of file[m
