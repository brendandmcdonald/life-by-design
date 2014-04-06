#require "rubygems"
#require "bundler/setup"
require 'sinatra'#remove this for heroku production; prostgres instead
#requrie 'pg'

get '/' do
	File.read(File.join('public', 'home.html'))
end

get '/test' do
	File.read(File.join('public', 'test.html'))
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