from flask import Flask, render_template, url_for

app = Flask(__name__)

app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0

@app.route('/')
def home():
	# return "Hello World"
	return render_template('portfolio_home.html')

@app.route('/resume')
def resume():
	return render_template('resume2.html')

@app.route('/projects')
def projects():
	return render_template('site_maintenance.html')


if __name__ == "__main__":
	app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0
	app.debug=True
	app.run()
		