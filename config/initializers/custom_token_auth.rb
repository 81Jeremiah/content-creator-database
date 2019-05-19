Knock::AuthTokenController.class_eval do

  private
    def auth_params
      #permit username and email
      params.permit :username, :email, :password
    end
end
