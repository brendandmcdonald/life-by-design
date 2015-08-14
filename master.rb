#require "rubygems"
#require "bundler/setup"
require 'sinatra'#remove this for heroku production; prostgres instead
#require 'pg'

get '/' do
	File.read(File.join('public', 'home.html'))
end

=begin
get '/quotes' do
	File.read(File.join('public', 'quotes.html'))
end
=end

=begin
get '/topiary' do
	"that's a kind of tree, right?"
end
=end