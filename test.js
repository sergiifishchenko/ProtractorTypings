var PerfRunner = require('C:/Users/sef/AppData/Roaming/npm/node_modules/protractor-perf'); 
describe('angularjs homepage todo list', function() { 
var perfRunner = new PerfRunner(protractor, browser); 


it('should add a todo', function() { 
	browser.get('http://www.angularjs.org'); 
	perfRunner.start(); 

	element(by.model('todoList.todoText')).sendKeys('write a protractor test'); 
		element(by.css('[value="add"]')).click(); 
		
		perfRunner.stop(); 

		if (perfRunner.isEnabled) { 
			perfRunner.printStats(); 
			expect(perfRunner.getStats('meanFrameTime')).toBeLessThan(60); 
		}; 


		var todoList = element.all(by.repeater('todo in todoList.todos')); 
		expect(todoList.count()).toEqual(3); 
		expect(todoList.get(2).getText()).toEqual('write a protractor test'); 
	}); 
}); 
