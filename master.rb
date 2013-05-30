#require "rubygems"
#require "bundler/setup"
require 'sinatra'#remove this for heroku production; prostgres instead
#requrie 'pg'

get '/' do
	File.read(File.join('public', 'trello.html'))
end

get '/quotes' do
	File.read(File.join('public', 'quotes.html'))
end

get '/give_thanks' do
	File.read(File.join('public', 'give_thanks.html'))
end

get '/trello' do
	File.read(File.join('public', 'trello.html'))
end

get '/blog' do
	File.read(File.join('public', 'blog.html'))
end

get '/contacts' do
	File.read(File.join('public', 'contacts.html'))
end

get '/journal' do
	File.read(File.join('public', 'journal.html'))
end

get '/codecademy' do
	File.read(File.join('public', 'codecademy.html'))
end

get '/jquery' do
	File.read(File.join('public', 'jquery.html'))
end

get '/quotes' do
	File.read(File.join('public', 'quotes.html'))
end

=begin
get '/topiary' do
	"that's a kind of tree, right?"
end
=end