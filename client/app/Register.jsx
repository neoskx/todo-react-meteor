Components.Register = React.createClass({
    render: function(){
        return (
            <div className="registerForm">
                <form >
                    <div className="form-group">
                        <label for="inputEmail">Email address</label>
                        <input type="email" className="form-control" id="inputEmail" placeholder="Email"/>
                        <label for="inputPassword">Password</label>
                        <input type="password" className="form-control" id="inputPassword" placeholder="Password"/>
                    </div>
                    <div className="form-group">

                    </div>
                    <button type="submit" className="btn btn-default">Register</button>
                    <a href="/" className="btn btn-default">Cancel</a>
                </form>
            </div>
        );
    }
});