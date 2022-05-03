module Api
  # GreetingsController
  class GreetingsController < ApplicationController
    def index
      greetings = Greeting.find(Random.new.rand(1..5))
      render json: greetings
    end
  end
end
