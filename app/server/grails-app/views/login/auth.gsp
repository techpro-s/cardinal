<html>
<body>
<h1 id="banner">Login to Security Demo</h1>
<form name="f" action="/login/auth"
      method="POST">
    <table>
        <tr>
            <td>Username:</td>
            <td><input type='text' name='username' /></td>
        </tr>
        <tr>
            <td>Password:</td>
            <td><input type='password' name='password'></td>
        </tr>
        <tr>
            <td colspan="2">&nbsp;</td>
        </tr>
        <tr>
            <td colspan='2'><input name="submit" type="submit">&nbsp;<input name="reset" type="reset"></td>
        </tr>
    </table>
    <input type="hidden"
           name="${_csrf.parameterName}"
           value="${_csrf.token}"/>
</form>
</body>
</html>
