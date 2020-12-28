const {
	exec
} = require("child_process");

function init() {
	exec("npm install", (error, stdout, stderr) => {
		if (error) {
			console.error(`执行install出错`);
			return;
		}
		const {
			say
		} = require("cfonts");
		const chalk = require("chalk");
		say("unicloudAdmin", {
			colors: ["yellow"],
			font: "simple",
			space: true,
		});
		console.log(
			chalk.blue("┏ 正在使用安装NPM依赖 -----------------") + "\n"
		);
		exec(
			"cd cloudfunctions-aliyun/api && npm install",
			(error, stdout, stderr) => {
				if (error) {
					console.error(`执行安装云开发环境出错`);
					return;
				}
				);
			}
		);
	});
}

init();
