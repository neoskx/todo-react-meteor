Components.Login = React.createClass({
    render: function () {
        return (
            <div className="loginForm">
                <form >
                    <div className="form-group">
                        <label for="inputEmail">Email address</label>
                        <input type="email" className="form-control" id="inputEmail" placeholder="Email"/>
                    </div>
                    <div className="form-group">
                        <label for="inputPassword">Password</label>
                        <input type="password" className="form-control" id="inputPassword" placeholder="Password"/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-default">Sign In</button>
                        <a className="btn btn-default" href="/register">Register</a>
                        <a className="btn btn-default" href="/forget">Forget Password</a>
                    </div>
                </form>
            </div>
        );
    }
});