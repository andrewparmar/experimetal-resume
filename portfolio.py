from flask import Flask, render_template

app = Flask(__name__)

app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0

@app.route('/')
def resume():
	# return "Hello World"
	return render_template('resume2.html')

if __name__ == "__main__":
	app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0
	app.debug=True
	app.run()
		