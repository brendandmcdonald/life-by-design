require 'sinatra'

get '/' do
	File.read(File.join('public', 'index.html'))
end
get '/topiary' do
	"that's a kind of tree, right?"
end