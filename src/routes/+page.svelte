<div class="p-2">
<h1>Welcome to my spotify application</h1>
<input/>
<select>
    <option>Hello</option>
</select>
<button>Button</button>
</div>
<style lang="scss">
    @use '../styles/functions';
    @use '@unsass/breakpoint';
    h1{
        color:red;
        font-size: functions.toRem(36);
         @include breakpoint.up("md") {
        color: darkcyan;
    }
     @include breakpoint.up("lg") {
        color: green;
    }
    }
</style>