Components.Forget = React.createClass({
    render: function(){
        return (
            <div className="forgetForm">
                <form >
                    <div className="form-group">
                        <label for="inputEmail">Email address</label>
                        <input type="email" className="form-control" id="inputEmail" placeholder="Email"/>
                    </div>
                    <div className="form-group">

                    </div>
                    <button type="submit" className="btn btn-default">Send</button>
                    <a href="/" className="btn btn-default">Cancel</a>
                </form>
            </div>
        );
    }
});