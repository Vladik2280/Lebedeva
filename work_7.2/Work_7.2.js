(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_264 = function() {
	this.initialize(img.CachedBmp_264);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1308,373);


(lib.CachedBmp_263 = function() {
	this.initialize(img.CachedBmp_263);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2047,1323);


(lib.CachedBmp_262 = function() {
	this.initialize(img.CachedBmp_262);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2046,1323);


(lib.CachedBmp_259 = function() {
	this.initialize(img.CachedBmp_259);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2046,1323);


(lib.CachedBmp_301 = function() {
	this.initialize(img.CachedBmp_301);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,871,566);


(lib.CachedBmp_257 = function() {
	this.initialize(img.CachedBmp_257);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,450,63);


(lib.CachedBmp_256 = function() {
	this.initialize(img.CachedBmp_256);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2036,924);


(lib.CachedBmp_255 = function() {
	this.initialize(img.CachedBmp_255);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2090,962);


(lib.CachedBmp_254 = function() {
	this.initialize(img.CachedBmp_254);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1977,878);


(lib.CachedBmp_300 = function() {
	this.initialize(img.CachedBmp_300);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1817,553);


(lib.CachedBmp_252 = function() {
	this.initialize(img.CachedBmp_252);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,650,44);


(lib.CachedBmp_251 = function() {
	this.initialize(img.CachedBmp_251);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,650,44);


(lib.CachedBmp_250 = function() {
	this.initialize(img.CachedBmp_250);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,873,294);


(lib.CachedBmp_249 = function() {
	this.initialize(img.CachedBmp_249);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,873,294);


(lib.CachedBmp_248 = function() {
	this.initialize(img.CachedBmp_248);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,873,294);


(lib.CachedBmp_247 = function() {
	this.initialize(img.CachedBmp_247);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,878,158);


(lib.CachedBmp_246 = function() {
	this.initialize(img.CachedBmp_246);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,878,158);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Path = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJVUIgGnHIgDnHIAAgWIglF9QgNCOgcEIIgtGVIAamXIAdmWIAfmBIhGF7IidMgIA9mTQAkjnAdirIBAl9IhnF0IhvGIIhzGHIBgmMQA+j5AmiSIBhl1IiHFpIiRF9IiVF8ICDmDQBEjHBCi6ICBlrIimFcIlnLcIFKrpICgldIgMAUIjmGIInUMMIDbmPQB2jVBoi4IDsmfQiqDvg1BJQiHC9hnCOIjyFIIDilTIDllRIDbk+Ij7ElQhzCGiXCvIkOEyID/k/IEBk8ID2kpIkTEOQiBB/ikCdIknEaIEaknIEcklIEOkTIkpD2Ik8EBIk/D/IEykOIE1kKIElj7IviKiIFIjyQCziCCXhsIE5jfIgUAMQkHCWiFBKImMDeImPDbIGFjsIGHjoIGIjmIAUgMIldCfQigBJjUBeIl1CkIFti1QDchsCThGIFcimIlsCBIsDEIIF8iUIF9iRQB4guDxhZIl1BhQhzAekYBGImNBgIGIhzQDLg7C9g0QB7gjD5hEIl9BAQi2AejcAjImTA9IGPhQIGRhNIF7hGImBAeIstA4IMrhXIF+gkIgYAAInGgEInHgFInGgKIHGgJIHHgGIHegDIl+glImWgpImVgtIMtA3IGBAfIl7hGImRhNImPhQIGTA9IGSBBIF9BAQkIhIhsgfQi9g1jLg6ImIhzIGNBgQCUAlD3A/IF1BhIlpiHQiqhAjThRIl8iVIGCCDQDbBLCmA7QBrAlEBBcIlcimIrclnILpFKQBfArD+B1IgUgMImIjmQi1hrjSh+ImFjrIGPDbQC4BmDUB4IGMDgIAUAMIk5jfIlKjuIlIjyIFTDiIFRDlIE+DaIklj6Qh+hri3igIkykNIE/D/IE8EBIEpD2IkOkTIkcklIkaknIEnEZQCsCmB5B3IETEOIj2kqQhWhoirjTIj/k/IEOEyQCyDNBYBoQAqAwDRD1Ijbk+QhdiGiIjLIjilTIDyFIQCCCzBsCXIDfE5IjsmgQh4jUhmi4IjbmPIHUMMIDmGIIAMAUIigldIinl0Iijl2IFnLdQA4BzBuDpQhXjygqh6Qg7imhLjbIiDmCICVF8ICRF9ICHFpIhhl1IhkmMIhgmMIBzGHIBvGJQAjB7BED5IhAl9QgeizgjjfIg9mTIBQGPQAqDVAjC7QAaCJAsDzIgfmBIgdmWIgamXIAtGVIApGWIAlF+IADneIAGnHIAJnGIAKHGQAEDkACDjIADHdIAkl9IBXsrIgaGXIgdGWIgfGAIBGl7QAji7AqjVIBQmPIg9GTQgjDfgeCzIhAF7IBnlyIBvmJIBzmHIhgGMQgkCThAD5IhhF0ICHloICRl9ICVl8IiDGCQhLDbg7CmIiAFrICllbQBGiTBsjcIC1luIijF2IinF0IifFcIALgTIDmmIIHUsMIjbGPQhmC4h4DUIjrGfIDek4QBsiXCCizIDylIIjiFTIjlFRIjaE9ID6klIEKk0IEOkyIj/E/IkBE8Ij1EoIESkNQB5h3CsimIEnkZIkaEnQh1B7inCqQhwBzieCfIEpj1IE8kCIE/j+IkyEOQjNCyhoBYIkkD6IE9jaIFRjlIFTjiIlIDyIlKDuIk4DeIATgLIGMjgQCuhjDeh7IGPjbImFDrQjSB+i1BrImIDmIgTALIFcifILplKIltC1IlvCyIlbClIFriBIGBiFIGCiDIl8CVQjTBRiqBAIloCGIF0hgIGLhkIGNhgImIBzImIBvIlzBnIShi+IsgCdIl6BGIGAgfIGWgdIGXgaImVAtImWApIl9AlIAXAAIHGADIHHAGIHGAJInGAKQj9AEjKABInGAEIgXAAISoB7ImXgaIsWg8IF6BGQCGAZELA0IGPBQImTg9QjngkirgdIl8hAQEfBPBUAYQC9A0DLA7IGIBzImNhgImLhkIl0hhIFoCHIL5ElImCiCImBiGIlriAIFbClQCTBGDcBsIFtC1Il1ikQjUheighJIlcieIGbDxQC1BqDSB+IGFDsImPjbQjpiBijhdImMjgIgTgLQDFCLBzBTQCXBsCzCCIFIDyIqknHIk9jaIEkD6IE1EKIEyEOIk/j/Ik8kBIkpj1IEOESIEcEkIEaEoIknkaQikidiBh/IkSkOID1EpIEBE8ID/E/IkOkyIkKk1Ij6kkIDaE9IDlFRIDiFTIjylIQiCizhsiXIjek4IDrGeQBoC4B2DVIDbGPInUsMIjmmIIgLgTICfFcIFKLpIi1ltIiylvIillbICAFqQBCC6BEDHICDGDIiVl8IiRl9IiHloIBhF0IBkGLIBgGMIhzmHIhvmIIhnlzIBAF8QAdCrAkDnIA9GTIidsgQgWhygwkIIAfF/IAdGXIAaGXIh7yoIAAAWIgDHHQgCDkgEDjIgKHGg");
	this.shape.setTransform(181.825,181.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,363.7,363.7), null);


(lib.Group_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.CachedBmp_264();
	this.instance.setTransform(0,0,0.1953,0.1953);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(0,0,255.5,72.9), null);


(lib.CompoundPath_10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FC4C07","#FC9900"],[0.008,1],0,9.1,0,-9.1).s().p("AAvBaIABgHQAAgBAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAQgFAAgFABQgNAFgPABQgNgBgMgEQgMAJgOgIQgIAFgKgDIgGgCQgGgEAAgFQAAgEACgBIABgDIACACQABAAAAABQABAAAAAAQABAAAAAAQABABABAAQAHAAADgHIAAg1IgBgFQgDgDgHgDIgFgDIAFgCQAIgEAAgBQADgDAAgFIAAgtQgDgHgHABIgFAAIgCACIgBgCQgCgCAAgDQAAgDACgCIAEgFQAMgGAMAGQAOgHANAJQAKgFAPAAQAMAAAIACIAJADIADABIABgDIgBgDIgBgCIADAAIAIgBQAGAAAEADQAEAFAAAGQAAAGgCADQACAEAAAGQAAAHgDAFIABAFQAAAEgCADQAAADgDACQgEAEgEAAQgEAAgFgCIgCgBIABgDIABgGQAAgMgGgIQgHgLgPAAQgIAAgFAEQgGAEgCAGIAAAnIAFABIAEAAIADAAQAEAAACgCQADgBAAgHQAAgDgBgCIgCgDIACgBQACgCAFAAQAIAAAEAHIACAGIgBAGQAEAFAAAHQAAAGgEAGIABAGQAAADgBADIgEAGQgIAHgIgGIgCgBIABgCQACgDAAgEQAAgJgEgCQgEgCgFAAIgIACIAAAzQAGAKAPAAQATAAAHgMQAIgMAAgRIgBgHIAAgBIABgBQAGgGAHAEIADACQADAEAAAEIAAAFIAAABQADADAAADIgBAFIAEADQACAEAAADQAAAHgEAEQABAFAAAEQAAAIgEAEQgEAGgHAAgAA1BTIAAACQAHABADgEQADgDAAgGQAAgFgCgDIgBgBIACgBQAEgFAAgFIgBgEIgEgDIgCgBIABgCIABgFIgCgCQgBgCAAgDIAAgFQAAgBAAAAQAAgBAAAAQAAgBgBgBQAAAAgBgBIgCgBIgDgBIgDABIABAHQAAARgJAPQgIAOgWAAQgUAAgFgMQgBgDAAgOIAAgpIACAAQAFgDAGABQAHAAAEABQAHADAAANIgBAHQADABAFgDIACgEIABgEIgBgGIgBgBIABgBQAEgGAAgEQAAgGgEgFIgBgBIACgGIgBgEQgDgEgFAAIgCAAIABAGQAAALgGACIgHACIgEABQgGABgHgEIgBgBIAAgsQADgIAIgFQAGgEAJAAQASAAAJANQAGALAAAMIgBAGIAFABQACAAADgDIACgDIABgFQAAgDgCgCIAAgBIABgCQADgDAAgGQAAgFgCgEIgBgBIABgCQACgBAAgGQAAgEgDgCQgCgDgEAAIgFAAIABABQAAAIgGgBIgEAAIgKgCQgGgCgMAAQgPAAgKADIgBABIgBgBQgMgJgLAIIgCABIgBgBQgFgCgFAAQgGAAgFACIgCACIgBADIAFgBQALAAAEAKIAAAvQAAAHgEAEQgBADgFABQAGADACACQACADAAAGIAAA2QgEALgLgBIgFAAQAAADADACIAFACQAIACAIgEIABgBIACABQAEACAHAAQAGAAAGgDIABgBIABABQALADANAAQAPABAMgGQAEgCAHAAQAHAAAAAIg");
	this.shape.setTransform(10.775,12.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_10, new cjs.Rectangle(3.4,3.4,14.799999999999999,18.200000000000003), null);


(lib.CompoundPath_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FC4C07","#FC9900"],[0.008,1],0,8.8,0,-8.7).s().p("AgwBVQgIAFgJgFQgFACgEAAQgGAAgEgDQgEgDAAgFQAAgEABgDIACgCIACACQACABAEAAQAFAAABgBIADgCIAQgtIADgNQAAgIgIgBIgHgDIAHgCQAIgDADgEQAFgEADgKIAMgnQgDgDgDAAQgEAAgEACIgCABIgBgCIgBgGIABgFIADgFQAFgEAJAAQAHAAAGAEQAFgEAIAAQAHAAAFAEQAHgEAHAAQAIAAAEADQAFAEABAGQAAADgCACIgCACIgCgCIgEgBQgFAAgBAHIANAsQACAHAKAEIAMAFIgHADQgJACAAAFIABAEIAVA3QAEAEADAAQAEAAACgCIABgBIACABQACACAAADIgBAGIgDAEQgEAEgHAAQgIAAgEgDQgGADgHAAQgHAAgFgDQgFADgHAAQgIAAgEgDQgFgDgBgHQAAgEADgCIABgBIABABIAFACIAGgBIgHgZIg2AAIgGAVQADAFAFAAQAFAAADgBIACgCIABACQACADAAAEQAAAEgEAEQgFAEgFAAQgFAAgGgDgAg/BQQAGAGAIgGIABgBIACABQADACAGAAQAEAAACgCQABAAABgBQAAAAAAgBQABAAAAgBQAAAAAAgBIAAgCIgIABQgIAAgFgIIgBgBIAIgbIA9AAIAJAfIAAABQgEAEgHAAIgFgBIAAAAQAAAEAEACQAEACAFAAQAHAAADgDIACgBIABABQALAHALgHIACgBIABABQAEADAHAAQAEAAAEgCIABgDIABgDIgGABQgGAAgGgGIAAgBIgVg3IgBgGQAAgHAHgDIgBAAQgLgFgDgJIgOgtIAAgBQADgMAJAAIAEABQABgEgDgCQgEgCgFAAQgHAAgHAEIgBABIgBgBQgFgEgGAAQgHAAgFAEIgBABIgCgBQgEgEgHAAQgHAAgDADIgDADIAAADIAAACQADgCAEAAQAGAAAEAGIABABIgMApQgDAKgGAHQgEADgEACQAGAEAAAIIgBAHIgSA2IgGAEQgCABgGAAIgGgBIAAACQAAACADACQAGAFAHgFIACgBgAgnAeIAcheIAcBegAghAZIArAAIgVhIg");
	this.shape.setTransform(12,12.119);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_9, new cjs.Rectangle(3.1,3.4,17.799999999999997,17.5), null);


(lib.CompoundPath_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FC4C07","#FC9900"],[0.008,1],0,8.8,0,-8.7).s().p("AA3BVQgJAEgKgCIgGgDQgGgDAAgGQAAgDABgCIACgCIACABIAEACQAIAAAEgHIAAhoIgqBnQgDAJgCAAIgEACQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgBAAIg1hpIAABeIAFAGQAGAFAGgEIACgBIACACQABADABAEQgBAEgEAEQgJAGgLgGQgJAFgJgFQgEADgFAAQgGAAgEgEQgDgDAAgFQAAgEABgCIACgCIABABQAEACAFAAQABAAAAgBQABAAAAAAQABAAAAgBQABAAABgBQACgCACgEIAAgyQAAgEgBgCQgEgEgHgCIgFgCIAFgDIAKgFQACgEAAgEIAAgvQgCgEgHAAIgFABIgCACIgCgDQgBgBAAgEIABgFIADgEQAFgDAHAAQAFAAAFACQAJgGAIAHQAGgFAGACIAFADQADACAFAKIAmBQIAjhWQADgGADgCQAHgDAHAEQALgGALAHQAEgDAFAAIAIAAIAGADQAEAEAAAFQAAADgBACIgCADIgBgCIgFgBQgHAAgCAFIAAAuQAAAFACABQADAEAHADIAEADIgEACIgJAFQgDADAAAEIAAA0QADAHAIAAQABAAAAAAQABgBABAAQAAAAABAAQAAAAAAgBIACgBIACACQACACAAADQAAADgCACIgEAEQgFAEgIAAQgGAAgGgDQgGADgGAAQgGAAgFgDgAhTBQQAHAGAIgGIABgBIABABQAEACAFABQAEAAADgCQABgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAIAAgCQgIACgIgFQgDgDgCgFIgBgBIAAgGIgBABIAAgCIABAAIAAhtIA+B6IACAAIABgBIA2iFIAACDQgEAKgMAAIgEgBIAAAAQAAADADACIAFACQAIACAIgEIACgBIABABQAKAGALgGIABgBIABABQAGADAFAAQAGAAAEgDIADgCIAAgDIAAAAIgEABQgMAAgDgKIgBgBIAAg1QAAgFAEgGQADgCADgBIgHgGQgDgDAAgHIABgvQACgJALAAIAFAAQAAgDgDgCIgFgCIgGAAQgDAAgEADIgCABIgCgBQgEgDgGAAQgGAAgDACIgBAAIgCAAQgEgEgFACIgFAGIgmBgIgshaQgCgHgEgDIgDgCIgEAAQgCAAgEADIgCACIgCgCQgFgHgIAGIgBACIgBgBQgEgDgFAAQgGAAgCACIgCACIgBADIAFAAQALAAADAIIAAAwQAAAGgEAFIgHAFQAGACACADQADADAAAGIAAAsIACAAIAAABIgCAAIAAAHQgCAFgEADQgEAEgEAAIgIgBIgBABQABACACADQADACADAAQAFgBADgCIACgBg");
	this.shape.setTransform(14.05,12.0865);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_8, new cjs.Rectangle(3.2,3.3,21.7,17.599999999999998), null);


(lib.CompoundPath_7_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FC4C07","#FC9900"],[0.008,1],0,8.8,0,-8.7).s().p("AgwBVQgIAFgKgFQgDACgGAAQgFAAgEgDQgEgDAAgFQAAgEABgDIABgCIACACQAEABADAAIAGgBIADgCIARg1IABgFQAAgIgHgBIgHgDIAHgCQAIgEADgDQAFgEADgKIAMgnQgDgDgDAAQgFAAgDACIgCABIgBgCIgBgGIABgFQABgDACgCQAFgEAJAAQAHAAAFAEQAGgEAIAAQAHAAAFAEQAHgEAHAAQAIAAAEADQAFAEABAGQgBADgCACIgBACIgCgCIgEgBQgFAAgCAHIANAsQADAIAKADIAMAFIgHADQgJACAAAFIAAAEIAVA3QAEAEADAAQAFAAACgCIABgBIABABQADACAAADIgBAGIgDAEQgFAEgHAAQgHAAgEgDQgNAHgMgHQgGADgGAAQgIAAgFgDQgFgDAAgHQAAgEADgCIABgBIABABIAFACIAFgBIgHgZIg2AAIgFAVQACAFAGAAQAFAAACgBIADgCIABACQABADAAAEQAAAFgEADQgEAEgGAAQgEAAgGgDgAAmBPQALAHALgHIACgBIABABQAEADAGAAQAFAAAEgCIABgDIABgDIgHABQgFAAgGgGIgBgBIgUg3IgBgGQAAgHAHgDIgBAAQgLgFgDgJIgOgtIAAgBQACgMAKAAIAEABQAAgDgCgDQgEgCgGAAQgHAAgGAEIgBABIgCgBQgDgEgHAAQgHAAgFAEIgCABIgBgBQgEgEgHAAQgHAAgDADIgDADIgBADIAAACIAIgCQAGAAAEAGIABABIgMApQgEALgFAGQgDADgFACQAGAEAAAIIgEAOIgPAvIgGAEQgCABgGAAIgGgBIAAACQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAQADACAEAAQAEAAADgCIACgBIACABQAGAFAIgFIABgBIABABQAEACAFAAQAEAAADgCQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBIAAgCIgHABQgIAAgGgIIAAgBIAIgbIA+AAIAJAfIgBABQgFAEgGAAIgFgBIAAAAQAAAEADACQAFACAFAAQAFAAAFgDIACgBgAgnAeIAcheIAcBegAghAZIArAAIgVhIg");
	this.shape.setTransform(12.35,12.119);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_7_0, new cjs.Rectangle(3.5,3.4,17.8,17.5), null);


(lib.CompoundPath_6_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FC4C07","#FC9900"],[0.008,1],0,9.1,0,-9).s().p("AAyBZIgCgBIAAgCIABgEQAAgBAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAQgDgBgGADQgMAGgQAAQgOAAgNgFQgQAJgOgIQgFAEgFAAIgJgBIgFgEQgEgEAAgFQAAgEADgBIABgCIACACQADACAEgBIADgCQADgCAFgJQAXgsABgFIABgCQAAgEgJgCIgIgDIAIgCQAMgDAFgHIAEgEIAYguQgKgFgMADIgIADQgOAFgFASQgCAHAAAGQAAAFABADIACACIgCABQgFAFgIgEIgFgDQgEgGAAgIQAAgGABgEQgFgEAAgGQAAgFADgFQgCgGAAgCIABgIIADgGQAFgEAHAAQADgBADACIACAAIAAACIgBAFQAAABAAAAQAAABABAAQAAAAAAAAQABAAAAAAQADABAFgDQALgFASgBQAQAAAKAGQAGgFAIgBQAHAAAGAEQAFgEAFAAIAHABIAFAEQAEADAAAGQAAADgCACIgCABIgBgBQgEgCgFABIgCACQgDADgFAKIgRAlIgBAGQAAAEAGACIAIADIgIACQgIAAgGAGQgFADgFAJIgWAuQAIAFAMAAQAPAAALgOQAFgHADgNIAAgIQAAgEgCgCIgBgCIACgBQAGgFAGAEIAFADQAFAGAAAHQAAAGgCAFQAGADAAAHQAAAHgEADQADAFAAAEQAAADgBAEQgBADgCACQgGAGgGgBIgGgBgAA2BSIgBADIADAAQAEAAAEgDIACgEIABgFQAAgDgDgEIgBgCIABgBQAEgEAAgFQAAgFgFgDIgCgBIABgCQACgDAAgHQAAgFgDgEIgEgDQgDgCgCABQABADAAAEIAAAJQgCAMgHAKQgMAPgSAAQgOABgKgHIgCgBIAYgxQADgIAIgIQAFgDAFgBQgEgEAAgEIABgHIASgmQAEgKAEgFIAFgCQAFgCAFACQAAgEgDgCIgDgCIgFAAQgEAAgEACIgBABIgCgBQgFgCgHAAQgGgBgGAFIgBABIgCgBQgKgEgPAAQgQAAgKAEQgHAEgEAAQgHAAAAgIIAAgEIgCAAQgFAAgDAEIgDAEIAAAGQAAADADADIABACIgCABQgDAFAAAEQAAAFAFADIABABIgBABQgBAEAAAGQAAAGADAEIADADIAGABQgBgEAAgFQAAgHACgHQAGgUAQgHIAJgDQAOgDANAGIADABIgbAzIgEAGQgFAGgIADQAGADAAAFIgBADQgBAFgYAuQgFAKgEADIgFABQgFABgEgBQAAADADADIADACIAHAAQAEAAAEgDIACgBIABABQAMAIAPgIIABgBIABABQAMADAPAAQAOAAAMgEQAHgEAEAAQAHAAAAAIg");
	this.shape.setTransform(10.775,12.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_6_0, new cjs.Rectangle(3.2,3.1,15.2,18.099999999999998), null);


(lib.CompoundPath_5_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FC4C07","#FC9900"],[0.008,1],0,8.8,0,-8.7).s().p("AgMBVQgHAEgLgCIgGgDQgGgDAAgGQAAgDACgCIABgCIACABQABAAAAABQABAAAAAAQABAAABABQAAAAABAAQAIAAADgHIAAg0IgBgGQgDgDgIgDIgFgCIAFgDQAIgDABgCQACgDABgFIAAgtQgDgGgIAAIgFABIgCACIgBgDQgCgCAAgDQAAgDACgCIAEgEQAMgHAMAHQAGgDAGAAQAHAAAGADQAJgGAKAEIAGACQAFADAAAGQAAADgCACIgBADIgCgCIgFgBQgHAAgEAGIAAAtQABAFABABQAEAEAGADIAFADIgFACQgGACgDADQgCADgBAEIAAA0QAEAHAHAAQABAAABAAQABgBAAAAQABAAAAAAQABgBAAAAIACgBIABACQACACAAADQAAADgCACIgDAEQgGAEgIAAQgGAAgFgDQgHADgGAAQgFAAgHgDgAgKBQQALAHALgHIABgBIABABQAFADAFAAQAHAAADgDIAEgCIAAgDIAAAAIgFABQgLAAgEgKIgBgBIAAg1QABgFAEgGQADgCADgBIgHgGQgDgDgBgHIABgvQAEgJALAAIAFAAQAAgDgEgCIgEgCQgIgCgIAFIgBABIgBgBQgMgHgKAHIgCABIgBgBQgKgHgKAGIgDADIgBACIAFAAQALAAAFAJIAAAvQgBAHgEAEQgBADgFACQAGACACADQADADAAAGIAAA2QgFAKgLAAIgFgBIAAAAQAAADAEACIAEACQAIACAIgEIABgBg");
	this.shape.setTransform(7.65,12.0875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_5_1, new cjs.Rectangle(3.4,3.3,8.6,17.599999999999998), null);


(lib.CompoundPath_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.CachedBmp_263();
	this.instance.setTransform(0,0,0.1953,0.1953);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_5, new cjs.Rectangle(0,0,399.9,258.4), null);


(lib.CompoundPath_4_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FC4C07","#FC9900"],[0.008,1],0,8.8,0,-8.7).s().p("AgsBVQgJAFgJgFQgEADgFAAQgGAAgDgEQgEgCAAgGQAAgEABgCIABgCIACABIAJACQAFAAAEgIIAAgzQAAgEgCgCQgDgEgHgCIgFgCIAFgDIAJgFQADgEAAgEIAAgtQgDgGgIAAIgFABIgCACIgBgDQgCgCAAgDIACgFIADgEQAFgDAHAAQAFAAAGACQAIgGAJAGQADgCADAAIAGAAIAEADQACABACAFIA+BvIAAgXQAAgEgCgBQgDgEgHgCIgFgCIAFgDQAGgCADgDQADgDAAgEIAAgsIgFgGQgHgFgHAEIgCABIgBgCQgCgCAAgEQAAgFAFgDQAEgDAGAAQAGAAAEACQAIgFAJAFQAFgDAFABQAGAAADADQAEAEAAAEQAAAEgBACIgCACIgCgBQgBgBgIAAQgEAAgEAHIAAAtQAAAEABABQADADAIAEIAEADIgEACIgKAFQgCADAAADIACA2QADAGAHAAQAAAAABgBQABAAAAAAQABAAAAAAQABgBAAAAIACgBIACACQABACAAADQAAADgBACIgDAEQgKAGgLgEQgEACgEAAQgEAAgFgDQgGAEgHgCIgDgDQgDgDgEgHIg9hqIAABfQAEAIAFAAQAFAAADgCIADgBIABACQABADAAAEQAAAEgEAEQgEADgGAAQgEAAgGgDgAArBQQAIAFAHgEIABgBIABABQAEACAFAAQAEAAADgDIADgCIAAgDIAAAAIgEABQgKAAgFgJIAAgBIgCg3QAAgGADgDIAHgEIgIgGQgCgEAAgFIAAgvQAFgKAIAAQAHAAACABIAAgCQAAgBAAgBQAAAAAAgBQgBAAAAgBQgBAAAAAAQgDgDgEABQgEAAgEACIgBABIgCgBQgHgGgHAGIgBABIgCgBQgDgCgFAAQgFAAgCACQgBAAAAABQgBAAAAABQAAAAgBABQAAAAAAABIAAACQAJgEAHAGQAEACADAGIABABIAAAtQAAAGgFAEQgBADgFACIAIAEQADADAAAGIAAArIhHiBIgEgFIgCgBIgEAAQgCAAgCACIgCADIgCgDQgDgCgEAAQgEAAgCACIgCACIgCgBQgDgDgGAAQgGAAgDACIgCACIgBADIAFAAQALAAAFAJIAAAvQAAAHgEAEIgHAFIAIAFQADADAAAGIAAA1QgFALgJAAIgIgBIAAABQAAABAAAAQAAABAAAAQABABAAABQAAAAABABQACACAFAAQAEgBADgCIACgBIABABQAHAFAIgFIABgBIABABQAFADAEAAQADAAAEgCQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAIAAgCIgIABQgIAAgGgLIAAgBIAAhzIBGB6QAEAHACADIACABIAEABQACAAADgDIABgBg");
	this.shape.setTransform(11.525,12.094);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_4_1, new cjs.Rectangle(3,3.3,17.1,17.599999999999998), null);


(lib.CompoundPath_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.CachedBmp_262();
	this.instance.setTransform(9.45,9.45,0.1953,0.1953);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_4, new cjs.Rectangle(9.5,9.5,399.6,258.4), null);


(lib.CompoundPath_3_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FC4C07","#FC9900"],[0.008,1],0,8.9,0,-8.8).s().p("AgSBTQgMgEgLgJQgUgUgEgiQgBgNgJgDIgEgCIAEgDQAJgEABgNQACgOAHgNQAHgNAKgIQAVgSAgAAQAXAAAOAKQAPAKADAQQABAHADACIACABIACABIgBADQgIAKgIgBIgBgBIgGAHQgFAEgFAAQgGAAgBgBIgCgCIABgCQACgCABgFIgBAAIgEgBIgFgDQgEgDgBgGIAAgCIABgDIADABQAFABAFgEQAEgDgBgCIgCgGIgFgDQgIgFgMAAQgZABAAAfIAAASQAAAKAKAFIAEADIgEACQgKAEAAALIAAAdQAAANAEAGQAEAGAKAAQAMAAADgLIABgHIAAgYIgDgBQgBAAAAAAQgBAAgBAAQAAAAgBABQAAAAAAAAIgCABIgCgBQgCgCAAgFQAAgEAEgEQAEgDAGAAQAGAAAEACQAFgCAGAAQAGAAAFACQAHgEAIADIAFACQAFAEAAAFQAAADgCADIgBABIgCgBQgBgBgEAAQgCAAgDAFIAAAjQABAEAFABQABAAAAgBQABAAAAAAQABAAAAAAQAAgBABAAIACgCIABADQACADAAACQAAAGgGADQgFAEgKAAQgJAAgHgFQgSAFgPABQgQAAgMgGgAgkhCQgJAIgHAMQgGALgCAOQgBAMgIAHQAIAEABANQADAfAUAUQAJAIAMAFQAaALAggMIACAAIABAAQAGAEAIAAQAIABAEgDQAEgDAAgCIAAgBIgEABQgIABgDgJIAAgmQAFgIAFAAIAFAAQAAgDgDgCIgDgBIgGgCQgDABgEADIgBABIgCgBQgIgHgLAHIgBABIgCgBQgDgDgFgBQgEAAgDADIgCAEIAAABIAFAAQAFAAADADIAAABIAAAaQAAAGgBADQgFANgPAAQgMAAgGgHQgFgHAAgPIAAgdQAAgMAJgFQgJgHAAgLIAAgSQAAglAeABQAOgBAJAFQAEACACAEQADADAAAFQAAAFgFAEQgGAEgGAAIADAEIAEACIACABIAEgBIABADIABACQAAAFgCADIACAAQAEAAADgDQAEgDABgEIACgCIACABIACABQAEABAFgGIgBgBQgDgCgCgJQgDgNgNgJQgNgJgVAAQgeAAgUAQgAAhAZIAEACQAIADAAAKIAAAHQAAALgIAFIgEACgAAmA2QACgDAAgEIAAgHQAAgDgCgDg");
	this.shape.setTransform(11.225,12.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_3_1, new cjs.Rectangle(3.2,3.3,16.1,17.7), null);


(lib.CompoundPath_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.CachedBmp_262();
	this.instance.setTransform(9.45,9.45,0.1953,0.1953);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_3, new cjs.Rectangle(9.5,9.5,399.6,258.4), null);


(lib.CompoundPath_2_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FC4C07","#FC9900"],[0.008,1],0,9,0,-8.9).s().p("AgMBWQgJAFgLgCIgFgDQgHgDAAgGQAAgCACgDIACgCIACABQAFAEAHgEIAFgFIAAg0QAAgEgCgCQgDgDgIgEIgEgBIAEgDQAIgDABgCQADgDABgFIAAgwQgIgCgIADIgJAHQgJALAAARQAAAKADAEIABABIgBACQgCAEgFAAQgEAAgDgCQgDgCgDgDQgFgHAAgHIACgLQgDgFgBgGQABgFACgEQgDgFgBgJQAAgLAKgEQAIgCAGADIABABIgBACIAAADIAAACIAAAAIAIgCQAYgGAMAGQAMgIAMAIQAHgDAGAAQAMAAAHACIAMADIABgCIgBgDIAAgCIABgBQAFgDAIACIAFAEQAGAFAAAHQgBAHgDAGQACAEAAAFQAAAGgEAFIADAJQAAAFgCAEQgBADgDAEQgFAHgHAAQgGAAgCgEIAAgCIABgBQACgEAAgJQABgJgDgIQgBgFgGgHQgHgJgMAAIgFABIAAAwQAAAEACACQADAEAHADIAFADIgFABIgJAGQgDADAAAEIAAA0IAFAFQAHAEAEgEIADgBIABACQACACAAADQAAADgCACIgEAEQgGAEgHAAQgHAAgGgEQgGAEgGAAQgGAAgGgEgAAOBRQALAHAKgGIADgCIABgDQgHACgHgEQgGgCgBgFIgBgBIAAg1QAAgGAEgFQACgCAEgBIgHgGQgDgEAAgGIAAg0IACAAQAEgCAEAAQAOAAAJALQAFAFACAIQAEAJAAAKQAAAJgEAGIADAAQAFAAAEgFIACgGIABgHQABgEgDgEIAAgBIABgBQADgEAAgGQAAgEgDgEIgBgCIABgBQAEgFAAgGQAAgFgDgEIgEgCIgGgBIAAADQAAAHgGAAIgDgBIgKgCQgGgCgMAAQgFAAgGADIgCABIgBgBQgFgDgGAAQgFAAgFADIgCABIgBgBQgLgGgXAGIgFABIgEABQgFAAgBgHIAAgDIgGABQgGADAAAHQgBAIAEAEIABABIgBACQgCADAAAFQgBAGAEAEIABABIgBABQgCAEAAAGQAAAGAEAFIAEAEIAFABIACAAQgDgGAAgKQAAgTAKgMQAGgFAFgDQAKgFALAEIABAAIAAA0QAAAHgEAEQgBADgFACQAGACACADQACADAAAGIAAA2QgCAFgFACQgIAEgGgCIAAAAQgBADAEACIAFACQAIACAJgFIABAAIACAAQAKAHALgHIABAAg");
	this.shape.setTransform(11.3,12.2354);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_2_2, new cjs.Rectangle(3.3,3.3,16.099999999999998,17.9), null);


(lib.CompoundPath_2_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.CachedBmp_262();
	this.instance.setTransform(9.45,9.45,0.1953,0.1953);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_2_0, new cjs.Rectangle(9.5,9.5,399.6,258.4), null);


(lib.CompoundPath_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.CompoundPath_1_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FC4C07","#FC9900"],[0.008,1],0,8.8,0,-8.7).s().p("Ag4BUQgIAFgKgDIgGgCQgGgEAAgFQAAgDABgCIACgDIACACQABAAAAABQABAAAAAAQABAAAAAAQABABABAAQAHAAADgHIAAg1QAAgGgHgEIgJgEIAFgCQAJgEACgFIAAgEIAAgtQgDgHgHAAIgFABIgCACIgCgCQgBgCAAgDQAAgDABgCIAFgFQAMgGAMAGQALgGANAGQAFgDAGAAQALAAAFAIIABAFQAAADgCACIgBACIgCgCIgEgBQgHAAgCAHIAAA2IAtAAIAAg2QgCgHgHAAIgEABIgCACIgBgCQgCgCAAgDIABgFIAEgFQALgGAMAGQANgGALAGQAIgFAKADIAGACQAGAEAAAGQAAADgBACIgCACIgCgCIgEgBQgIAAgDAHIAAAtQAAAHAHAEIAJAEIgEADIgJADQgDADAAAFIAAA1QADAHAIAAQAAAAABgBQABAAAAAAQABAAAAAAQABgBAAAAIACgCIACADIABAEQAAAEgBACQgCADgDABQgGAEgGAAQgGgBgGgDQgLAHgNgHQgFADgGABQgLAAgFgIQgBgCAAgEQAAgDACgBIABgDIACACQABAAAAABQABAAAAAAQABAAAAAAQABABAAAAQAHgBACgGIAAg2IgtAAIAAA2QACAGAHABQAAAAABgBQABAAAAAAQABAAAAAAQABgBAAAAIACgCIABADQACABAAADQAAAEgBACIgEAEQgEADgHABQgHgBgFgDQgGAEgGAAQgGAAgGgEgAA6BQQAKAFALgFIACgDIABgDIgEABQgMABgEgLIAAg2QAAgGAFgFIAFgDIgBAAQgJgFAAgKIAAgvQAEgKAMAAIAEABQAAgCgDgDIgFgCQgJgCgHAEIgBABIgCgBQgDgCgHAAQgFAAgGACIgBABIgBgBQgFgCgFAAQgGAAgDACIgCACIgBADIAEgBQALAAADAKIAAA8Ig3AAIAAg8QADgKALAAIAEABIgBgDQgDgEgIAAQgFAAgFACIgBABIgBgBQgFgCgGAAQgGAAgEACIgCABIgBgBQgLgGgKAGIgCACIgBADIAFgBQALAAAEAKIAAAvIgBAHQgCAFgHADIABAAQAJAEAAAKIAAA2QgEALgLgBIgFgBIAAABQAAADADACIAFACQAIACAIgEIABgBIACABQAEACAGABQAGgBAFgCIABgBIABABQAFACAFABQAFgBAEgCIACgDIABgDIgEABQgLABgDgLIAAgBIAAg7IA3AAIAAA8QgEALgKgBIgEgBIABADQADAGAIAAQAFgBAFgCIABgBIABABQAGACAFABQAHgBADgCIACgBg");
	this.shape.setTransform(12.075,12);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_1_2, new cjs.Rectangle(3.4,3.2,17.400000000000002,17.6), null);


(lib.CompoundPath_1_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.CachedBmp_259();
	this.instance.setTransform(9.45,9.45,0.1953,0.1953);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_1_0, new cjs.Rectangle(9.5,9.5,399.6,258.4), null);


(lib.CompoundPath_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#912014").s().p("AkhTHQiJhFhZh6Ij1AAQgwAAgigiQgigiAAguIAAhGItfAAQgwAAgiggQghgiAAguIAAgWIgoAAQgwAAgiggQghgiAAguIAAyzQAAguAhghQAighAwAAIAoAAIAAgVQAAgvAhghQAighAwAAINfAAIAAhFQAAgvAigiQAighAwAAID1AAQBZh6CJhGQCJhFCYAAQCZAACJBFQCJBGBZB6ID1AAQAwAAAiAhQAiAiAAAvIAABFINfAAQAwAAAiAhQAhAhAAAvIAAAVIAoAAQAwAAAiAhQAhAhAAAuIAASzQAAAughAiQgiAggwAAIgoAAIAAAWQAAAughAiQgiAggwAAItfAAIAABGQAAAugiAiQgiAigwAAIj1AAQhZB6iJBFQiIBFiaAAQiYAAiJhFgA9dJQICbAAIAACGIPSAAIAAC3IEtAAIAlA0QBIBiBuA4QBuA3B6AAQB7AABug3QBug4BIhiIAlg0IEtAAIAAi3IPSAAIAAiGICbAAIAAyfIibAAIAAiGIvSAAIAAi3IktAAIglgzQhIhjhug4Qhug3h7AAQh6AAhuA3QhuA4hIBjIglAzIktAAIAAC3IvSAAIAACGIibAAg");
	this.shape.setTransform(207.375,137.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_1, new cjs.Rectangle(6.4,8,402,258.4), null);


(lib.CompoundPath = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3A0D3E").s().p("AP9GEIgbgDIgYAhIgNglIgbgGIgbAfIgKgoIgagHIgdAcIgHgoIgagKIgfAbIgEgoIgagMQgRAOgPAKIgCgoIgZgNIghAXIAAgoIgZgNQgPAKgTALIACgoIgYgPIgjATIADgnIgXgQIgkASIAFgoIgWgRIglAQIAHgnIgWgSIglAPIAIgnIgVgTIglAOIAKgoIgUgTIgnAMIAMgmIgTgUIgnAJIAOglIgTgVIgnAHIAPglIgRgVIgoAGIARgkIgQgXIgoAFIASgkIgPgYIgoADIAUgjIgHgMIACgBIgDABIgGgMIgoABIAVgiIgNgZIgogBIAQgWIgfABIgNAYIAWAhIgogBIgOAYIAVAjIgogEIgHAMIgCgBIACACIgIALIATAjIgogFIgPAXIARAkIgngHIgRAWIAQAlIgngIIgJALIgCgCIACACIgJAKIAOAlIgmgJIgTAUIANAmIgmgLIgUASIALAnIglgNIgKAJIgLAJIAKAoIglgPIgVASIAIAnIglgPIgVARIAGAnIgkgSIgWARIAEAnIgjgTIgLAIIAAAAIgMAIIADAnIgigUIgYAOIABAoIghgWIgYANIgBAoIgggXIgZALIgCApIgggZIgZALIgEAnIgegZIgaAJIgHAnIgcgcIgaAHIgKAmIgagfIgNAEIAAAAIgNABIgOAmIgXghIgNACIAAgEIAAAEIgKAAIgDAAIgSAkIgTgjIgbgCQgIAOgOATQgGgPgHgXIgOgBIABgGQAjAHAbAAIAfABIBegJIABACIgBgCQAbgFAjgJQAZgGAjgNQAagJAigOIBJgjIAqgVIARgJQAdgQAKgHIB+hTIAhgaIASgNQAWgSAKgJIBBg6IAdgcIAQgRQAQgPAMgOIAQgRIAbggIBOhmIBlijIAcg6IAFADIgHAMIAUAaIADgEIgGgNIAEgCIAqBQIBEBuIBOBqIAbAgIAQARIAcAgIARAQIAdAdIB0BlIAiAaIARAMIAkAaIgBADIACgDIAPAKQAZARAPAIIAOAJIAqAZIAMAHQAiARAMAGIAKAFQAhAQAQAHQAbAMAiAMQAaALAjAKIA/APQAcAGAkACQAjADAdgBQAbgBAkgHIABAGIgOACIgOAlIgWggIgcABIgTAjg");
	this.shape.setTransform(113.575,42.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath, new cjs.Rectangle(0,0,227.2,84.8), null);


// stage content:
(lib._72 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_14 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EAOGAo/IWAugICkAkI2AOgg");
	var mask_graphics_1 = new cjs.Graphics().p("EARyAo/IV5ugICjAkI14Ogg");
	var mask_graphics_2 = new cjs.Graphics().p("EAVeAo/IVyugICjAkI1yOgg");
	var mask_graphics_3 = new cjs.Graphics().p("EAZKAo/IVrugICiAkI1rOgg");
	var mask_graphics_4 = new cjs.Graphics().p("EAc2Ao/IVkugIChAkI1jOgg");
	var mask_graphics_5 = new cjs.Graphics().p("EAgjAo/IVcugIChAkI1dOgg");
	var mask_graphics_6 = new cjs.Graphics().p("EAkPAo/IVVugICgAkI1WOgg");
	var mask_graphics_7 = new cjs.Graphics().p("EAn7Ao/IVOugICfAkI1OOgg");
	var mask_graphics_8 = new cjs.Graphics().p("EArnAo/IVIugICdAkI1HOgg");
	var mask_graphics_9 = new cjs.Graphics().p("EAvTAo/IVBugICdAkI1BOgg");
	var mask_graphics_10 = new cjs.Graphics().p("EAy/Ao/IU6ugICcAkI05Ogg");
	var mask_graphics_11 = new cjs.Graphics().p("EAwsAo/IUzugICbAkI0yOgg");
	var mask_graphics_12 = new cjs.Graphics().p("EAuZAo/IUsugICaAkI0rOgg");
	var mask_graphics_13 = new cjs.Graphics().p("EAsHAo/IUkugICaAkI0lOgg");
	var mask_graphics_14 = new cjs.Graphics().p("EAp0Ao/IUdugICZAkI0dOgg");
	var mask_graphics_15 = new cjs.Graphics().p("EAnhAo/IUWugICYAkI0WOgg");
	var mask_graphics_16 = new cjs.Graphics().p("EAlOAo/IUPugICXAkI0POgg");
	var mask_graphics_17 = new cjs.Graphics().p("EAi7Ao/IUIugICWAkI0IOgg");
	var mask_graphics_18 = new cjs.Graphics().p("EAgoAo/IUBugICVAkI0BOgg");
	var mask_graphics_19 = new cjs.Graphics().p("EAeVAo/IT6ugICVAkIz6Ogg");
	var mask_graphics_20 = new cjs.Graphics().p("EAcCAo/ITzugICUAkIzzOgg");
	var mask_graphics_21 = new cjs.Graphics().p("EAZvAo/ITsugICTAkIzsOgg");
	var mask_graphics_22 = new cjs.Graphics().p("EAXcAo/ITlugICSAkIzlOgg");
	var mask_graphics_23 = new cjs.Graphics().p("EAVJAo/ITeugICRAkIzdOgg");
	var mask_graphics_24 = new cjs.Graphics().p("EAS2Ao/ITXugICQAkIzWOgg");
	var mask_graphics_25 = new cjs.Graphics().p("EAQjAo/ITQugICQAkIzQOgg");
	var mask_graphics_26 = new cjs.Graphics().p("EATDAo/ITIugICPAkIzIOgg");
	var mask_graphics_27 = new cjs.Graphics().p("EAViAo/ITCugICOAkIzBOgg");
	var mask_graphics_28 = new cjs.Graphics().p("EAYCAo/IS7ugICNAkIy7Ogg");
	var mask_graphics_29 = new cjs.Graphics().p("EAaiAo/ISzugICNAkIy0Ogg");
	var mask_graphics_30 = new cjs.Graphics().p("EAdBAo/IStugICLAkIysOgg");
	var mask_graphics_31 = new cjs.Graphics().p("EAfhAo/ISlugICLAkIylOgg");
	var mask_graphics_32 = new cjs.Graphics().p("EAiBAo/ISeugICKAkIyeOgg");
	var mask_graphics_33 = new cjs.Graphics().p("EAkgAo/ISXugICKAkIyXOgg");
	var mask_graphics_34 = new cjs.Graphics().p("EAnAAo/ISQugICJAkIyROgg");
	var mask_graphics_35 = new cjs.Graphics().p("EApgAo/ISJugICHAkIyJOgg");
	var mask_graphics_36 = new cjs.Graphics().p("EAr/Ao/ISCugICHAkIyCOgg");
	var mask_graphics_37 = new cjs.Graphics().p("EAufAo/IR7ugICGAkIx7Ogg");
	var mask_graphics_38 = new cjs.Graphics().p("EAw+Ao/IR0ugICGAkIx0Ogg");
	var mask_graphics_39 = new cjs.Graphics().p("EAzeAo/IRtugICEAkIxtOgg");
	var mask_graphics_40 = new cjs.Graphics().p("EA1+Ao/IRmugICDAkIxmOgg");
	var mask_graphics_41 = new cjs.Graphics().p("EAzDAo/IRfufICDAkIxfOfg");
	var mask_graphics_42 = new cjs.Graphics().p("EAwJApAIRYugICCAkIxYOgg");
	var mask_graphics_43 = new cjs.Graphics().p("EAtPApAIRRufICBAkIxROfg");
	var mask_graphics_44 = new cjs.Graphics().p("EAqVApAIRJufICBAkIxKOfg");
	var mask_graphics_45 = new cjs.Graphics().p("EAnaApBIRDugICAAkIxDOgg");
	var mask_graphics_46 = new cjs.Graphics().p("EAkgApBIQ8ufIB+AkIw7Ofg");
	var mask_graphics_47 = new cjs.Graphics().p("EAhmApBIQ1ufIB9AkIw0Ofg");
	var mask_graphics_48 = new cjs.Graphics().p("EAesApCIQtugIB9AkIwtOgg");
	var mask_graphics_49 = new cjs.Graphics().p("EAbxApCIQnugIB8AkIwmOgg");
	var mask_graphics_50 = new cjs.Graphics().p("EAY3ApCIQgufIB7AkIwfOfg");
	var mask_graphics_51 = new cjs.Graphics().p("EAV9ApDIQYugIB7AkIwZOgg");
	var mask_graphics_52 = new cjs.Graphics().p("EATDApDIQRugIB6AkIwSOgg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:247.4156,y:265.9}).wait(1).to({graphics:mask_graphics_1,x:270.2436,y:265.9}).wait(1).to({graphics:mask_graphics_2,x:293.0716,y:265.9}).wait(1).to({graphics:mask_graphics_3,x:315.8997,y:265.9}).wait(1).to({graphics:mask_graphics_4,x:338.7277,y:265.9}).wait(1).to({graphics:mask_graphics_5,x:361.5557,y:265.9}).wait(1).to({graphics:mask_graphics_6,x:384.3838,y:265.9}).wait(1).to({graphics:mask_graphics_7,x:407.2118,y:265.9}).wait(1).to({graphics:mask_graphics_8,x:430.0399,y:265.9}).wait(1).to({graphics:mask_graphics_9,x:452.8679,y:265.9}).wait(1).to({graphics:mask_graphics_10,x:475.6959,y:265.9}).wait(1).to({graphics:mask_graphics_11,x:460.214,y:265.9}).wait(1).to({graphics:mask_graphics_12,x:444.732,y:265.9}).wait(1).to({graphics:mask_graphics_13,x:429.2501,y:265.9}).wait(1).to({graphics:mask_graphics_14,x:413.7681,y:265.9}).wait(1).to({graphics:mask_graphics_15,x:398.2861,y:265.9}).wait(1).to({graphics:mask_graphics_16,x:382.8042,y:265.9}).wait(1).to({graphics:mask_graphics_17,x:367.3222,y:265.9}).wait(1).to({graphics:mask_graphics_18,x:351.8403,y:265.9}).wait(1).to({graphics:mask_graphics_19,x:336.3583,y:265.9}).wait(1).to({graphics:mask_graphics_20,x:320.8763,y:265.9}).wait(1).to({graphics:mask_graphics_21,x:305.3944,y:265.9}).wait(1).to({graphics:mask_graphics_22,x:289.9124,y:265.9}).wait(1).to({graphics:mask_graphics_23,x:274.4305,y:265.9}).wait(1).to({graphics:mask_graphics_24,x:258.9485,y:265.9}).wait(1).to({graphics:mask_graphics_25,x:243.4665,y:265.9}).wait(1).to({graphics:mask_graphics_26,x:258.6429,y:265.9}).wait(1).to({graphics:mask_graphics_27,x:273.8193,y:265.9}).wait(1).to({graphics:mask_graphics_28,x:288.9957,y:265.9}).wait(1).to({graphics:mask_graphics_29,x:304.172,y:265.9}).wait(1).to({graphics:mask_graphics_30,x:319.3484,y:265.9}).wait(1).to({graphics:mask_graphics_31,x:334.5248,y:265.9}).wait(1).to({graphics:mask_graphics_32,x:349.7011,y:265.9}).wait(1).to({graphics:mask_graphics_33,x:364.8775,y:265.9}).wait(1).to({graphics:mask_graphics_34,x:380.0539,y:265.9}).wait(1).to({graphics:mask_graphics_35,x:395.2303,y:265.9}).wait(1).to({graphics:mask_graphics_36,x:410.4066,y:265.9}).wait(1).to({graphics:mask_graphics_37,x:425.583,y:265.9}).wait(1).to({graphics:mask_graphics_38,x:440.7594,y:265.9}).wait(1).to({graphics:mask_graphics_39,x:455.9358,y:265.9}).wait(1).to({graphics:mask_graphics_40,x:471.1121,y:265.9}).wait(1).to({graphics:mask_graphics_41,x:451.7006,y:265.9333}).wait(1).to({graphics:mask_graphics_42,x:432.289,y:265.9667}).wait(1).to({graphics:mask_graphics_43,x:412.8775,y:266}).wait(1).to({graphics:mask_graphics_44,x:393.4659,y:266.0333}).wait(1).to({graphics:mask_graphics_45,x:374.0544,y:266.0667}).wait(1).to({graphics:mask_graphics_46,x:354.6429,y:266.1}).wait(1).to({graphics:mask_graphics_47,x:335.2313,y:266.1333}).wait(1).to({graphics:mask_graphics_48,x:315.8198,y:266.1667}).wait(1).to({graphics:mask_graphics_49,x:296.4082,y:266.2}).wait(1).to({graphics:mask_graphics_50,x:276.9967,y:266.2333}).wait(1).to({graphics:mask_graphics_51,x:257.5851,y:266.2667}).wait(1).to({graphics:mask_graphics_52,x:238.1736,y:266.3}).wait(1));

	// Слой_11
	this.instance = new lib.CachedBmp_246();
	this.instance.setTransform(425.3,441.4,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(53));

	// дю_солей
	this.instance_1 = new lib.CachedBmp_247();
	this.instance_1.setTransform(425.3,441.4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(53));

	// шарик_зеленый (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("EA4NAkBQgrgrAAg8QAAg9ArgrQArgrA9AAQA8AAArArQArArAAA9QAAA8grArQgrArg8AAQg9AAgrgrg");
	var mask_1_graphics_1 = new cjs.Graphics().p("EA4RAkmQhXgLg/hBQg+hBAAhRQAAhRA+gxQA/gyBXALQBXALA/BCQA+BBAABQQAABRg+AxQgzAphEAAQgPAAgQgCg");
	var mask_1_graphics_2 = new cjs.Graphics().p("EA2wAkcQhwgchQhcQhPhcgBhlQAAhlBQgzQBQgzBwAdQBwAcBQBcQBQBcAABlQAABlhQAzQgzAhhAAAQgkAAgpgLg");
	var mask_1_graphics_3 = new cjs.Graphics().p("EA1UAkOQiGg0hfh8Qhfh7AAh5QAAh5BfgwQBfgwCFA0QCGA1BeB7QBfB7ABB5QAAB5hfAxQgtAXg3AAQg7AAhFgcg");
	var mask_1_graphics_4 = new cjs.Graphics().p("EAz9Aj7QiWhShrieQhrifAAiNQAAiNBqgqQBrgpCWBSQCWBSBrCfQBqCeABCNQAACNhrAqQgkAOgoAAQhRAAhjg3g");
	var mask_1_graphics_5 = new cjs.Graphics().p("EAytAjkQihh1hzjFQhzjGAAihQAAihBygfQByggChB1QChB0BzDFQBzDGAAChQAAChhyAfQgYAHgbAAQhiAAh+hbg");
	var mask_1_graphics_6 = new cjs.Graphics().p("EAxvAjNQidhyhwjFQhwjGgBilQAAikBvglQBwgkCdBxQCdByBwDGQBwDGAACkQAAClhvAkQgbAJgeAAQhcAAh3hWg");
	var mask_1_graphics_7 = new cjs.Graphics().p("EAwxAi2QiahuhtjGQhtjHAAioQgBioBtgpQBsgpCZBuQCaBvBtDGQBtDGAACpQABCohtApQgdALghAAQhYAAhvhRg");
	var mask_1_graphics_8 = new cjs.Graphics().p("EAvzAifQiWhrhqjHQhqjGgBisQAAisBpguQBqguCVBsQCVBsBrDGQBqDHAACsQABCshqAtQgfAOgjAAQhUAAhohMg");
	var mask_1_graphics_9 = new cjs.Graphics().p("EAu1AiJQiShphnjHQhojHgBiwQAAivBngzQBmgyCSBpQCRBoBnDHQBoDHABCwQAACvhnAzQghAQgmAAQhOAAhihGg");
	var mask_1_graphics_10 = new cjs.Graphics().p("EAt3AhyQiOhmhljIQhkjHgBizQgBizBkg3QBkg4CNBmQCNBmBlDHQBlDIABCzQABCzhkA3QgjATgpAAQhKAAhbhBg");
	var mask_1_graphics_11 = new cjs.Graphics().p("EAs5AhaQiKhihijIQhijIgBi3QAAi3Bhg7QBhg8CJBjQCJBiBiDIQBiDIABC3QABC3hhA7QglAXgqAAQhGAAhVg+g");
	var mask_1_graphics_12 = new cjs.Graphics().p("EAr7AhDQiGhghfjIQhfjJgBi6QgBi6BehBQBehACFBgQCGBgBfDIQBfDJABC6QABC6heBBQgmAZgsAAQhCAAhPg5g");
	var mask_1_graphics_13 = new cjs.Graphics().p("EAq9AgsQiChdhcjJQhdjJgBi+QgBi+BchFQBbhFCBBdQCBBdBdDJQBcDJABC+QABC+hbBFQgnAdguAAQg9AAhKg1g");
	var mask_1_graphics_14 = new cjs.Graphics().p("EAp/AgUQh+hZhajKQhZjJgBjCQgBjBBYhKQBYhKB+BaQB9BaBaDJQBZDKABDBQACDChZBKQgoAhgvAAQg6AAhEgyg");
	var mask_1_graphics_15 = new cjs.Graphics().p("EApBAf9Qh6hXhXjKQhXjKgBjFQgBjFBVhOQBWhPB5BXQB5BXBYDKQBXDKABDFQABDFhWBOQgoAmgxAAQg2AAg/gug");
	var mask_1_graphics_16 = new cjs.Graphics().p("EAoGAgaQh7hXhYjJQhYjJgBjDQgBjDBWhMQBXhMB6BXQB7BYBXDJQBYDJACDDQABDDhWBMQgpAjgwAAQg3AAhBgvg");
	var mask_1_graphics_17 = new cjs.Graphics().p("EAnLAg4Qh8hZhZjIQhZjHgBjBQgBjBBXhKQBXhKB8BZQB8BYBYDIQBZDIACDAQABDBhXBKQgoAigvAAQg5AAhDgwg");
	var mask_1_graphics_18 = new cjs.Graphics().p("EAmQAhVQh9hZhajHQhZjHgCi+QgBi+BYhIQBYhIB9BZQB9BZBZDHQBaDHABC+QACC+hYBIQgnAggvAAQg6AAhFgxg");
	var mask_1_graphics_19 = new cjs.Graphics().p("EAlVAhyQh+hahbjFQhajGgCi8QgBi8BZhGQBYhFB/BaQB+BaBaDFQBbDGABC8QACC8hZBGQgnAeguAAQg7AAhHgzg");
	var mask_1_graphics_20 = new cjs.Graphics().p("EAkaAiQQh/hbhcjFQhbjEgCi6QgBi6BahDQBZhEB/BbQCABbBbDEQBcDFABC6QACC5haBEQgmAdgtAAQg9AAhJg0g");
	var mask_1_graphics_21 = new cjs.Graphics().p("EAjfAitQiAhchdjDQhcjEgCi3QgBi4BahBQBbhBCABbQCBBcBcDDQBdDEABC3QACC4hbBBQglAbgtAAQg+AAhLg1g");
	var mask_1_graphics_22 = new cjs.Graphics().p("EAikAjKQiBhchejDQhdjCgCi1QgBi1BbhAQBbg/CCBdQCCBcBdDCQBeDDABC1QACC1hcA/QglAagrAAQg/AAhOg3g");
	var mask_1_graphics_23 = new cjs.Graphics().p("EAhqAjnQiDhdhfjBQhejBgCizQgBizBcg9QBcg9CDBdQCDBdBeDBQBfDCABCzQACCyhcA9QglAZgqAAQhBAAhPg5g");
	var mask_1_graphics_24 = new cjs.Graphics().p("EAgvAkFQiFhehfjBQhfjAgBiwQgCixBdg7QBdg7CEBeQCEBeBfDAQBfDAACCxQACCxhdA7QgkAWgqAAQhCAAhRg5g");
	var mask_1_graphics_25 = new cjs.Graphics().p("EAjHAjiQiVhphqjHQhrjIgCivQgCivBogyQBpgxCUBpQCUBpBrDHQBrDHABCvQACCvhoAyQghAQgnAAQhQAAhkhHg");
	var mask_1_graphics_26 = new cjs.Graphics().p("EAleAi+Qikh0h2jOQh3jOgBiuQgCitBzgpQB0gpCkB0QClB1B2DOQB2DOACCtQACCuh0ApQgeAKghAAQhfAAh6hWg");
	var mask_1_graphics_27 = new cjs.Graphics().p("EAn2AiaQi0h/iCjVQiCjVgCisQgCisB/ggQB/ggC0CAQC1B/CCDVQCBDVADCsQACCsh/AgQgaAGgbAAQhuAAiRhmg");
	var mask_1_graphics_28 = new cjs.Graphics().p("EAqOAh2QjFiLiNjbQiNjcgDiqQgCirCKgXQCLgXDECLQDFCKCNDcQCODbACCrQACCqiKAXQgUAEgUAAQh+AAiph3g");
	var mask_1_graphics_29 = new cjs.Graphics().p("EAsmAhRQjViWiZjiQiZjjgCipQgDipCWgOQCVgODVCWQDVCVCZDjQCZDiADCpQACCpiWAOIgaABQiNAAjDiIg");
	var mask_1_graphics_30 = new cjs.Graphics().p("EAu+AgrQjmigikjpQiljqgCinQgDioChgFQChgFDlChQDlCgClDpQClDqACCnQADCoihAFIgKAAQieAAjeicg");
	var mask_1_graphics_31 = new cjs.Graphics().p("EA33Ai1QisgEj2isQj1iriwjwQixjwgCimQgDimCtAEQCsAED1CrQD2CsCwDwQCwDvADCmQACCjikAAIgIAAg");
	var mask_1_graphics_32 = new cjs.Graphics().p("EA6qAiiQi3gNkGi2QkGi3i8j2Qi7j3gDikQgDilC4ANQC4ANEFC2QEGC3C8D2QC8D3ADCkQACCZieAAIgagBg");
	var mask_1_graphics_33 = new cjs.Graphics().p("EA9eAiPQjEgWkVjBQkWjBjIj+QjHj9gDijQgDijDDAWQDDAVEWDCQEWDBDID9QDHD+ADCjQADCQiYAAQgUAAgXgDg");
	var mask_1_graphics_34 = new cjs.Graphics().p("EA+1Ai0Qi6gUkIi4QkIi3i+jxQi+jwgDibQgDibC6AUQC5AVEJC3QEIC4C+DwQC9DxADCbQADCJiRAAQgTAAgVgDg");
	var mask_1_graphics_35 = new cjs.Graphics().p("EBALAjaQiwgTj6iuQj7iui0jkQi0jkgDiSQgDiTCwATQCwATD7CuQD6CuC1DkQC0DjADCTQACCCiJAAQgSAAgVgCg");
	var mask_1_graphics_36 = new cjs.Graphics().p("EBBiAj/QimgSjtikQjtikiqjXQiqjXgDiLQgDiLCmASQCnATDsCkQDtCkCrDXQCqDXADCLQACB6iCAAQgRAAgTgCg");
	var mask_1_graphics_37 = new cjs.Graphics().p("EBC5AklQidgRjfiaQjfibigjKQihjLgDiCQgCiDCcARQCdARDfCaQDfCaChDLQCgDKADCDQACB0h6AAQgQAAgSgCg");
	var mask_1_graphics_38 = new cjs.Graphics().p("EBBcAkMQiegWjhibQjhibiijHQihjGgDh9QgDh8CeAWQCeAWDhCbQDgCbCiDHQCiDGADB9QACBqhyAAQgUAAgXgEg");
	var mask_1_graphics_39 = new cjs.Graphics().p("EA/+Aj0QifgbjiicQjjicijjDQijjDgCh2QgDh2CfAaQCfAbDiCcQDjCcCjDDQCjDDACB2QADBhhqAAQgYAAgdgFg");
	var mask_1_graphics_40 = new cjs.Graphics().p("EA+gAjbQigggjkidQjkidiki/Qiki/gDhwQgChwCgAgQCgAgDkCcQDkCdCkC/QCkC/ADBwQACBYhhAAQgbAAgkgHg");
	var mask_1_graphics_41 = new cjs.Graphics().p("EA9DAjCQihgljmieQjmieili7Qili7gDhqQgDhqCiAlQChAlDmCdQDmCeClC7QClC8ADBpQACBPhZAAQgeAAgqgJg");
	var mask_1_graphics_42 = new cjs.Graphics().p("EA7lAioQiigqjoieQjnieimi4Qini3gChkQgDhkCjAqQCiAqDoCeQDnCfCnC3QCmC4ACBjQACBHhQAAQgiAAgwgNg");
	var mask_1_graphics_43 = new cjs.Graphics().p("EA6IAiPQikgvjpifQjpigioizQini0gDhdQgCheCkAvQCkAvDpCfQDpCfCnC0QCoC0ACBdQACA+hIAAQglAAg2gPg");
	var mask_1_graphics_44 = new cjs.Graphics().p("EA4qAh1Qilg0jrigQjqigipiwQioiwgDhXQgChXClAzQClA0DrCgQDqCgCpCwQCpCwACBXQABA3hAAAQgmAAg+gTg");
	var mask_1_graphics_45 = new cjs.Graphics().p("EA3NAhbQing5jsihQjtigipitQiqisgChRQgDhRCnA5QCmA5DtChQDsCgCqCtQCpCsADBRQABAvg5AAQgoAAhEgXg");
	var mask_1_graphics_46 = new cjs.Graphics().p("EA1vAhBQiog+juihQjuiiirioQiqipgDhLQgChLCoA+QCoA+DuCiQDuChCqCpQCrCoACBLQACApgyAAQgpAAhMgcg");
	var mask_1_graphics_47 = new cjs.Graphics().p("EA0RAgnQiphDjvijQjwiiisilQisikgChFQgChFCpBDQCpBDDwCiQDvCjCsCkQCsClACBFQABAigrAAQgqAAhTggg");
	var mask_1_graphics_48 = new cjs.Graphics().p("EA1sAhZQiNg0jJiIQjIiHiQiNQiQiNgBg/QgCg+CNA0QCNA0DICHQDICICQCNQCQCNACA+QABAigqAAQgiAAhAgXg");
	var mask_1_graphics_49 = new cjs.Graphics().p("EA3GAiLQhxglihhtQihhthzh1Qh0h2gCg4QgCg5BxAmQByAlChBtQCgBtB0B1QB0B2ACA4QABAigpAAQgbAAgtgPg");
	var mask_1_graphics_50 = new cjs.Graphics().p("EA4hAi9QhWgXh5hSQh6hShXheQhYhegBgyQgCgzBVAXQBWAXB5BSQB6BSBXBeQBYBeABAyQABAjgoAAQgSAAgagHg");
	var mask_1_graphics_51 = new cjs.Graphics().p("EA57AjtQg5gIhSg3QhSg3g8hHQg7hGgBgtQgCgsA6AIQA5AIBSA4QBSA3A7BHQA7BGACAsQABAmgpAAIgQgCg");
	var mask_1_graphics_52 = new cjs.Graphics().p("EA6OAkFQgrgcgfgwQgfgvgBgmQgCgmAegGQAdgHAqAdQArAdAfAvQAfAvABAmQACAmgeAGIgLABQgaAAgigXg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:384.725,y:234.825}).wait(1).to({graphics:mask_1_graphics_1,x:381.2887,y:234.387}).wait(1).to({graphics:mask_1_graphics_2,x:377.5819,y:234.2643}).wait(1).to({graphics:mask_1_graphics_3,x:373.4547,y:234.5813}).wait(1).to({graphics:mask_1_graphics_4,x:368.7672,y:235.3978}).wait(1).to({graphics:mask_1_graphics_5,x:363.3928,y:236.7156}).wait(1).to({graphics:mask_1_graphics_6,x:356.2117,y:233.8983}).wait(1).to({graphics:mask_1_graphics_7,x:349.0303,y:231.0935}).wait(1).to({graphics:mask_1_graphics_8,x:341.8486,y:228.3006}).wait(1).to({graphics:mask_1_graphics_9,x:334.6665,y:225.5193}).wait(1).to({graphics:mask_1_graphics_10,x:327.4841,y:222.7492}).wait(1).to({graphics:mask_1_graphics_11,x:320.3013,y:219.9899}).wait(1).to({graphics:mask_1_graphics_12,x:313.1183,y:217.2411}).wait(1).to({graphics:mask_1_graphics_13,x:305.9349,y:214.5023}).wait(1).to({graphics:mask_1_graphics_14,x:298.7512,y:211.7733}).wait(1).to({graphics:mask_1_graphics_15,x:291.5672,y:209.0538}).wait(1).to({graphics:mask_1_graphics_16,x:285.96,y:212.1124}).wait(1).to({graphics:mask_1_graphics_17,x:280.3529,y:215.1724}).wait(1).to({graphics:mask_1_graphics_18,x:274.746,y:218.2338}).wait(1).to({graphics:mask_1_graphics_19,x:269.1391,y:221.2966}).wait(1).to({graphics:mask_1_graphics_20,x:263.5323,y:224.3609}).wait(1).to({graphics:mask_1_graphics_21,x:257.9257,y:227.4267}).wait(1).to({graphics:mask_1_graphics_22,x:252.3191,y:230.494}).wait(1).to({graphics:mask_1_graphics_23,x:246.7126,y:233.5629}).wait(1).to({graphics:mask_1_graphics_24,x:241.1062,y:236.6334}).wait(1).to({graphics:mask_1_graphics_25,x:260.1529,y:234.5044}).wait(1).to({graphics:mask_1_graphics_26,x:279.2024,y:232.4344}).wait(1).to({graphics:mask_1_graphics_27,x:298.2547,y:230.4203}).wait(1).to({graphics:mask_1_graphics_28,x:317.3097,y:228.4595}).wait(1).to({graphics:mask_1_graphics_29,x:336.3674,y:226.5492}).wait(1).to({graphics:mask_1_graphics_30,x:355.4279,y:224.6872}).wait(1).to({graphics:mask_1_graphics_31,x:374.4911,y:222.8709}).wait(1).to({graphics:mask_1_graphics_32,x:393.5571,y:221.0965}).wait(1).to({graphics:mask_1_graphics_33,x:412.6258,y:219.3582}).wait(1).to({graphics:mask_1_graphics_34,x:420.3451,y:223.0838}).wait(1).to({graphics:mask_1_graphics_35,x:428.0625,y:226.8114}).wait(1).to({graphics:mask_1_graphics_36,x:435.7782,y:230.541}).wait(1).to({graphics:mask_1_graphics_37,x:443.4921,y:234.2725}).wait(1).to({graphics:mask_1_graphics_38,x:434.2636,y:231.953}).wait(1).to({graphics:mask_1_graphics_39,x:425.0352,y:229.6515}).wait(1).to({graphics:mask_1_graphics_40,x:415.807,y:227.3684}).wait(1).to({graphics:mask_1_graphics_41,x:406.579,y:225.1042}).wait(1).to({graphics:mask_1_graphics_42,x:397.3512,y:222.8594}).wait(1).to({graphics:mask_1_graphics_43,x:388.1236,y:220.6345}).wait(1).to({graphics:mask_1_graphics_44,x:378.8962,y:218.4299}).wait(1).to({graphics:mask_1_graphics_45,x:369.669,y:216.2463}).wait(1).to({graphics:mask_1_graphics_46,x:360.442,y:214.084}).wait(1).to({graphics:mask_1_graphics_47,x:351.2152,y:211.9438}).wait(1).to({graphics:mask_1_graphics_48,x:357.4892,y:216.0496}).wait(1).to({graphics:mask_1_graphics_49,x:363.7592,y:220.1854}).wait(1).to({graphics:mask_1_graphics_50,x:370.0254,y:224.3718}).wait(1).to({graphics:mask_1_graphics_51,x:376.2877,y:228.6629}).wait(1).to({graphics:mask_1_graphics_52,x:382.5467,y:233.2472}).wait(1));

	// Слой_10
	this.instance_2 = new lib.CachedBmp_248();
	this.instance_2.setTransform(427.65,311.4,0.5,0.5);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(53));

	// шарик_желтый (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("EA+UAevQiCiCAAi3QAAi4CCiDQCDiBC3AAQC4AACBCBQCDCDAAC4QAAC3iDCCQiBCDi4AAQi3AAiDiDg");
	var mask_2_graphics_1 = new cjs.Graphics().p("EA8DAfUQiLiMAAjFQAAjFCLiMQCNiMDFAAQDFAACLCMQCNCMAADFQAADFiNCMQiLCMjFAAQjFAAiNiMg");
	var mask_2_graphics_2 = new cjs.Graphics().p("EA5zAf4QiViVAAjSQAAjTCViWQCWiVDTAAQDTAACVCVQCWCWAADTQAADSiWCVQiVCXjTAAQjTAAiWiXg");
	var mask_2_graphics_3 = new cjs.Graphics().p("EA3jAgdQififAAjgQAAjgCfigQCgifDgABQDggBCfCfQCgCgAADgQAADgigCfQifCgjgAAQjgAAigigg");
	var mask_2_graphics_4 = new cjs.Graphics().p("EA1SAhBQioioAAjtQAAjuCoiqQCqioDuAAQDuAACoCoQCqCqAADuQAADtiqCoQioCqjuAAQjuAAiqiqg");
	var mask_2_graphics_5 = new cjs.Graphics().p("EAzCAhmQiyiyAAj7QAAj7Cyi0QC0iyD7AAQD7AACyCyQCzC0ABD7QgBD7izCyQiyCzj7ABQj7gBi0izg");
	var mask_2_graphics_6 = new cjs.Graphics().p("EAyGAh5Qi1i2AAkAQAAkAC1i3QC2i1D/AAQD/AAC1C1QC2C3AAEAQAAEAi2C2Qi1C3j/AAQj/AAi2i3g");
	var mask_2_graphics_7 = new cjs.Graphics().p("EAxJAiLQi3i5AAkFQAAkFC3i6QC5i5EDAAQEDAAC3C5QC5C6AAEFQAAEFi5C5Qi3C7kDAAQkDAAi5i7g");
	var mask_2_graphics_8 = new cjs.Graphics().p("EAwNAieQi6i9AAkJQAAkKC6i+QC7i8EHAAQEHAAC6C8QC7C+AAEKQAAEJi7C9Qi6C+kHAAQkHAAi7i+g");
	var mask_2_graphics_9 = new cjs.Graphics().p("EAvQAiwQi8jAAAkOQAAkPC8jCQC/i/EKAAQELAAC8C/QC/DCAAEPQAAEOi/DAQi8DCkLAAQkKAAi/jCg");
	var mask_2_graphics_10 = new cjs.Graphics().p("EAuUAjDQi/jEAAkTQAAkUC/jFQDBjDEOAAQEPAAC/DDQDBDFAAEUQAAETjBDEQi/DFkPAAQkOAAjBjFg");
	var mask_2_graphics_11 = new cjs.Graphics().p("EAtYAjWQjCjHAAkZQAAkYDCjJQDDjGETAAQESAADBDGQDEDJAAEYQAAEZjEDHQjBDIkSAAQkTAAjDjIg");
	var mask_2_graphics_12 = new cjs.Graphics().p("EAsbAjoQjEjKAAkdQAAkeDEjMQDHjKEWAAQEWAADEDKQDGDMAAEeQAAEdjGDKQjEDMkWAAQkWAAjHjMg");
	var mask_2_graphics_13 = new cjs.Graphics().p("EArfAj7QjHjOAAkiQAAkjDHjPQDJjNEaAAQEaAADGDNQDKDPAAEjQAAEijKDOQjGDPkaAAQkaAAjJjPg");
	var mask_2_graphics_14 = new cjs.Graphics().p("EAqjAkNQjKjRAAknQAAknDKjTQDLjREeAAQEdAADKDRQDMDTAAEnQAAEnjMDRQjKDTkdAAQkeAAjLjTg");
	var mask_2_graphics_15 = new cjs.Graphics().p("EApmAkgQjMjVAAksQAAksDMjXQDPjUEhAAQEhAADMDUQDPDXAAEsQAAEsjPDVQjMDXkhAAQkhAAjPjXg");
	var mask_2_graphics_16 = new cjs.Graphics().p("EApNAkEQjCjNAAkgQAAkhDCjOQDFjMETAAQEUAADCDMQDFDOAAEhQAAEgjFDNQjCDOkUAAQkTAAjFjOg");
	var mask_2_graphics_17 = new cjs.Graphics().p("EAo0AjoQi4jFAAkUQAAkWC4jGQC7jEEGAAQEFAAC5DEQC7DGAAEWQAAEUi7DFQi5DGkFAAQkGAAi7jGg");
	var mask_2_graphics_18 = new cjs.Graphics().p("EAobAjMQivi9AAkJQAAkKCvi+QCxi7D4AAQD4AACvC7QCwC+AAEKQAAEJiwC9QivC9j4AAQj4AAixi9g");
	var mask_2_graphics_19 = new cjs.Graphics().p("EAoCAivQili0AAj9QAAj/Cli1QCni0DqAAQDqAAClC0QCnC1AAD/QAAD9inC0QilC2jqAAQjqAAini2g");
	var mask_2_graphics_20 = new cjs.Graphics().p("EAnpAiTQibisAAjyQAAjzCbitQCdirDcAAQDdAACbCrQCdCtAADzQAADyidCsQibCujdAAQjcAAidiug");
	var mask_2_graphics_21 = new cjs.Graphics().p("EAnQAh3QiRikAAjmQAAjoCRilQCTijDPAAQDOAACSCjQCTClAADoQAADmiTCkQiSCljOAAQjPAAiTilg");
	var mask_2_graphics_22 = new cjs.Graphics().p("EAm3AhbQiIicAAjbQAAjbCIidQCKibDAAAQDBAACHCbQCKCdAADbQAADbiKCcQiHCdjBAAQjAAAiKidg");
	var mask_2_graphics_23 = new cjs.Graphics().p("EAmeAg/Qh+iUAAjPQAAjQB+iVQCAiTCyAAQCzAAB+CTQCACVAADQQAADPiACUQh+CVizAAQiyAAiAiVg");
	var mask_2_graphics_24 = new cjs.Graphics().p("EAmFAgjQh0iMAAjEQAAjEB0iNQB2iLClAAQCkAAB1CLQB1CNAADEQAADEh1CMQh1CMikAAQilAAh2iMg");
	var mask_2_graphics_25 = new cjs.Graphics().p("EAkUAgYQiGiKAAjDQAAjDCGiLQCHiJC+AAQC9AACGCJQCHCLAADDQAADDiHCKQiGCLi9AAQi+AAiHiLg");
	var mask_2_graphics_26 = new cjs.Graphics().p("EAiiAgNQiXiJAAjBQAAjBCXiJQCZiJDXAAQDWAACXCJQCZCJAADBQAADBiZCJQiXCJjWAAQjXAAiZiJg");
	var mask_2_graphics_27 = new cjs.Graphics().p("EAgxAgBQipiHAAi/QAAi/CpiIQCriHDvAAQDvAACpCHQCqCIAAC/QAAC/iqCHQipCJjvAAQjvAAiriJg");
	var mask_2_graphics_28 = new cjs.Graphics().p("AfAf2Qi7iGAAi9QAAi9C7iHQC8iGEIAAQEIAAC6CGQC9CHAAC9QAAC9i9CGQi6CHkIAAQkIAAi8iHg");
	var mask_2_graphics_29 = new cjs.Graphics().p("AdOfrQjMiFAAi7QAAi7DMiGQDOiEEhAAQEhAADLCEQDPCGAAC7QAAC7jPCFQjLCGkhAAQkhAAjOiGg");
	var mask_2_graphics_30 = new cjs.Graphics().p("AbdfgQjeiEAAi5QAAi5DeiFQDgiDE5AAQE6AADdCDQDgCFAAC5QAAC5jgCEQjdCFk6AAQk5AAjgiFg");
	var mask_2_graphics_31 = new cjs.Graphics().p("AZrfVQjuiCAAi4QAAi4DuiDQDyiCFSAAQFSAADvCCQDyCDAAC4QAAC4jyCCQjvCDlSAAQlSAAjyiDg");
	var mask_2_graphics_32 = new cjs.Graphics().p("AX6fKQkAiBAAi2QAAi2EAiCQEDiAFrAAQFrAAEBCAQEDCCAAC2QAAC2kDCBQkBCClrAAQlrAAkDiCg");
	var mask_2_graphics_33 = new cjs.Graphics().p("AWJe/QkSiAAAi0QAAi0ESiBQEUh/GEAAQGEAAESB/QEVCBAAC0QAAC0kVCAQkSCAmEAAQmEAAkUiAg");
	var mask_2_graphics_34 = new cjs.Graphics().p("AWpfrQj8iAAAizQAAi0D8iBQD/h/FmAAQFlAAD8B/QD/CBAAC0QAACzj/CAQj8CBllAAQlmAAj/iBg");
	var mask_2_graphics_35 = new cjs.Graphics().p("EAXKAgYQjniAAAi0QAAi0DniBQDph/FHAAQFGAADnB/QDpCBAAC0QAAC0jpCAQjnCAlGAAQlHAAjpiAg");
	var mask_2_graphics_36 = new cjs.Graphics().p("EAXqAhEQjRiAAAizQAAi0DRiBQDUh/EoAAQEoAADRB/QDUCBAAC0QAACzjUCAQjRCBkoAAQkoAAjUiBg");
	var mask_2_graphics_37 = new cjs.Graphics().p("EAYLAhxQi7iAAAi0QAAi0C7iBQC+h/EJAAQEKAAC7B/QC+CBAAC0QAAC0i+CAQi7CAkKAAQkJAAi+iAg");
	var mask_2_graphics_38 = new cjs.Graphics().p("EAX0AhxQi9iAAAi0QAAi0C9iBQC/h/ELAAQELAAC8B/QC/CBAAC0QAAC0i/CAQi8CAkLAAQkLAAi/iAg");
	var mask_2_graphics_39 = new cjs.Graphics().p("EAXcAhxQi9iAAAi0QAAi0C9iBQDAh/ENAAQENAAC+B/QDACBAAC0QAAC0jACAQi+CAkNAAQkNAAjAiAg");
	var mask_2_graphics_40 = new cjs.Graphics().p("EAXFAhxQi/iAAAi0QAAi0C/iBQDBh/EPAAQEOAAC/B/QDBCBAAC0QAAC0jBCAQi/CAkOAAQkPAAjBiAg");
	var mask_2_graphics_41 = new cjs.Graphics().p("EAWuAhxQjAiAAAi0QAAi0DAiBQDCh/EQAAQEQAADAB/QDDCBAAC0QAAC0jDCAQjACAkQAAQkQAAjCiAg");
	var mask_2_graphics_42 = new cjs.Graphics().p("EAWXAhwQjCh/AAi0QAAi0DCiBQDDh/ESAAQERAADCB/QDDCBAAC0QAAC0jDB/QjCCBkRAAQkSAAjDiBg");
	var mask_2_graphics_43 = new cjs.Graphics().p("EAV/AhwQjCh/AAi0QAAi0DCiBQDFh/ETAAQEUAADCB/QDFCBAAC0QAAC0jFB/QjCCBkUAAQkTAAjFiBg");
	var mask_2_graphics_44 = new cjs.Graphics().p("EAVoAhwQjEh/AAi0QAAi0DEiBQDGh/EVAAQEVAADDB/QDGCBAAC0QAAC0jGB/QjDCBkVAAQkVAAjGiBg");
	var mask_2_graphics_45 = new cjs.Graphics().p("EAVRAhwQjFh/AAi0QAAi0DFiBQDHh/EWAAQEXAADEB/QDHCBAAC0QAAC0jHB/QjECBkXAAQkWAAjHiBg");
	var mask_2_graphics_46 = new cjs.Graphics().p("EAU5AhwQjGh/AAi0QAAi0DGiBQDIh/EZAAQEYAADGB/QDICBAAC0QAAC0jIB/QjGCBkYAAQkZAAjIiBg");
	var mask_2_graphics_47 = new cjs.Graphics().p("EAUiAhwQjHh/AAi0QAAi0DHiBQDJh/EaAAQEaAADHB/QDJCBAAC0QAAC0jJB/QjHCBkaAAQkaAAjJiBg");
	var mask_2_graphics_48 = new cjs.Graphics().p("EATdAiaQjHiAAAi0QAAi0DHiAQDJiAEaAAQEaAADHCAQDJCAAAC0QAAC0jJCAQjHCAkaAAQkaAAjJiAg");
	var mask_2_graphics_49 = new cjs.Graphics().p("EASYAjDQjHh/AAi0QAAi0DHiBQDJh/EaAAQEaAADHB/QDJCBAAC0QAAC0jJB/QjHCBkaAAQkaAAjJiBg");
	var mask_2_graphics_50 = new cjs.Graphics().p("EARTAjtQjHiAAAi0QAAi0DHiAQDJiAEaAAQEaAADHCAQDJCAAAC0QAAC0jJCAQjHCAkaAAQkaAAjJiAg");
	var mask_2_graphics_51 = new cjs.Graphics().p("EAQOAkWQjHiAAAizQAAi0DHiBQDJh/EaAAQEaAADHB/QDJCBAAC0QAACzjJCAQjHCBkaAAQkaAAjJiBg");
	var mask_2_graphics_52 = new cjs.Graphics().p("EAPJAlAQjHiAAAi0QAAi0DHiBQDJh/EaAAQEaAADHB/QDJCBAAC0QAAC0jJCAQjHCAkaAAQkaAAjJiAg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:474.625,y:209.8}).wait(1).to({graphics:mask_2_graphics_1,x:465.81,y:214.43}).wait(1).to({graphics:mask_2_graphics_2,x:456.995,y:219.06}).wait(1).to({graphics:mask_2_graphics_3,x:448.1801,y:223.6901}).wait(1).to({graphics:mask_2_graphics_4,x:439.3651,y:228.3201}).wait(1).to({graphics:mask_2_graphics_5,x:430.5501,y:232.9501}).wait(1).to({graphics:mask_2_graphics_6,x:426.0752,y:235.1604}).wait(1).to({graphics:mask_2_graphics_7,x:421.6003,y:237.3707}).wait(1).to({graphics:mask_2_graphics_8,x:417.1254,y:239.581}).wait(1).to({graphics:mask_2_graphics_9,x:412.6505,y:241.7913}).wait(1).to({graphics:mask_2_graphics_10,x:408.1756,y:244.0016}).wait(1).to({graphics:mask_2_graphics_11,x:403.7008,y:246.2119}).wait(1).to({graphics:mask_2_graphics_12,x:399.2259,y:248.4223}).wait(1).to({graphics:mask_2_graphics_13,x:394.751,y:250.6326}).wait(1).to({graphics:mask_2_graphics_14,x:390.2761,y:252.8429}).wait(1).to({graphics:mask_2_graphics_15,x:385.8012,y:255.0532}).wait(1).to({graphics:mask_2_graphics_16,x:377.583,y:251.4159}).wait(1).to({graphics:mask_2_graphics_17,x:369.3647,y:247.7787}).wait(1).to({graphics:mask_2_graphics_18,x:361.1465,y:244.1414}).wait(1).to({graphics:mask_2_graphics_19,x:352.9283,y:240.5041}).wait(1).to({graphics:mask_2_graphics_20,x:344.7101,y:236.8669}).wait(1).to({graphics:mask_2_graphics_21,x:336.4919,y:233.2296}).wait(1).to({graphics:mask_2_graphics_22,x:328.2736,y:229.5924}).wait(1).to({graphics:mask_2_graphics_23,x:320.0554,y:225.9551}).wait(1).to({graphics:mask_2_graphics_24,x:311.8372,y:222.3179}).wait(1).to({graphics:mask_2_graphics_25,x:310.7413,y:221.0743}).wait(1).to({graphics:mask_2_graphics_26,x:309.6453,y:219.8307}).wait(1).to({graphics:mask_2_graphics_27,x:308.5494,y:218.5871}).wait(1).to({graphics:mask_2_graphics_28,x:307.4535,y:217.3435}).wait(1).to({graphics:mask_2_graphics_29,x:306.3576,y:216.1}).wait(1).to({graphics:mask_2_graphics_30,x:305.2617,y:214.8564}).wait(1).to({graphics:mask_2_graphics_31,x:304.1658,y:213.6128}).wait(1).to({graphics:mask_2_graphics_32,x:303.0698,y:212.3692}).wait(1).to({graphics:mask_2_graphics_33,x:301.9739,y:211.1256}).wait(1).to({graphics:mask_2_graphics_34,x:292.5998,y:215.5756}).wait(1).to({graphics:mask_2_graphics_35,x:283.2258,y:220.0256}).wait(1).to({graphics:mask_2_graphics_36,x:273.8517,y:224.4756}).wait(1).to({graphics:mask_2_graphics_37,x:264.4776,y:228.9256}).wait(1).to({graphics:mask_2_graphics_38,x:262.8232,y:228.9231}).wait(1).to({graphics:mask_2_graphics_39,x:261.1688,y:228.9206}).wait(1).to({graphics:mask_2_graphics_40,x:259.5144,y:228.9181}).wait(1).to({graphics:mask_2_graphics_41,x:257.86,y:228.9156}).wait(1).to({graphics:mask_2_graphics_42,x:256.2056,y:228.9131}).wait(1).to({graphics:mask_2_graphics_43,x:254.5512,y:228.9106}).wait(1).to({graphics:mask_2_graphics_44,x:252.8968,y:228.9081}).wait(1).to({graphics:mask_2_graphics_45,x:251.2423,y:228.9056}).wait(1).to({graphics:mask_2_graphics_46,x:249.5879,y:228.9031}).wait(1).to({graphics:mask_2_graphics_47,x:247.9335,y:228.9006}).wait(1).to({graphics:mask_2_graphics_48,x:241.0285,y:233.0456}).wait(1).to({graphics:mask_2_graphics_49,x:234.1235,y:237.1906}).wait(1).to({graphics:mask_2_graphics_50,x:227.2185,y:241.3356}).wait(1).to({graphics:mask_2_graphics_51,x:220.3135,y:245.4806}).wait(1).to({graphics:mask_2_graphics_52,x:213.4085,y:249.6256}).wait(1));

	// Слой_9
	this.instance_3 = new lib.CachedBmp_249();
	this.instance_3.setTransform(427.65,311.4,0.5,0.5);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(53));

	// маска_шарик_красный (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_0 = new cjs.Graphics().p("EAbOAjQQhIhIAAhnQAAhmBIhKQBJhIBnAAQBnAABIBIQBJBKAABmQAABnhJBIQhIBKhnAAQhnAAhJhKg");
	var mask_3_graphics_1 = new cjs.Graphics().p("EAcSAjCQhHhGAAhkQAAhjBHhHQBIhHBkAAQBlAABHBHQBIBHAABjQAABkhIBGQhHBHhlAAQhkAAhIhHg");
	var mask_3_graphics_2 = new cjs.Graphics().p("EAdVAi0QhFhEAAhhQAAhgBFhFQBHhEBjAAQBjAABGBEQBGBFAABgQAABhhGBEQhGBEhjAAQhjAAhHhEg");
	var mask_3_graphics_3 = new cjs.Graphics().p("EAeZAilQhEhBAAheQAAhdBEhCQBFhCBhAAQBhAABFBCQBFBCAABdQAABehFBBQhFBDhhAAQhhAAhFhDg");
	var mask_3_graphics_4 = new cjs.Graphics().p("EAfdAiXQhDhAAAhaQAAhaBDhAQBDhABgAAQBfAABDBAQBEBAAABaQAABahEBAQhDBAhfAAQhgAAhDhAg");
	var mask_3_graphics_5 = new cjs.Graphics().p("EAggAiJQhBg+AAhXQAAhXBBg+QBDg9BdAAQBdAABCA9QBDA+AABXQAABXhDA+QhCA+hdAAQhdAAhDg+g");
	var mask_3_graphics_6 = new cjs.Graphics().p("EAgVAiLQhIhDAAhfQAAhfBIhEQBKhDBnAAQBnAABJBDQBJBEAABfQAABfhJBDQhJBEhnAAQhnAAhKhEg");
	var mask_3_graphics_7 = new cjs.Graphics().p("EAgLAiNQhQhJAAhnQAAhnBQhKQBQhJBxAAQBwAABQBJQBQBKAABnQAABnhQBJQhQBKhwAAQhxAAhQhKg");
	var mask_3_graphics_8 = new cjs.Graphics().p("EAgAAiQQhXhPAAhvQAAhwBXhPQBXhPB7AAQB6AABWBPQBYBPAABwQAABvhYBPQhWBPh6AAQh7AAhXhPg");
	var mask_3_graphics_9 = new cjs.Graphics().p("EAf1AiSQhdhUAAh4QAAh4BdhVQBehUCEAAQCFAABdBUQBeBVAAB4QAAB4heBUQhdBViFAAQiEAAhehVg");
	var mask_3_graphics_10 = new cjs.Graphics().p("EAfqAiUQhkhaAAiAQAAh/BkhcQBlhaCOAAQCOAABkBaQBmBcAAB/QAACAhmBaQhkBbiOAAQiOAAhlhbg");
	var mask_3_graphics_11 = new cjs.Graphics().p("EAffAiXQhrhgAAiIQAAiIBrhhQBshgCYAAQCYAABrBgQBsBhAACIQAACIhsBgQhrBhiYAAQiYAAhshhg");
	var mask_3_graphics_12 = new cjs.Graphics().p("EAfUAiZQhxhmAAiQQAAiQBxhnQB0hlChAAQChAAByBlQBzBnAACQQAACQhzBmQhyBnihAAQihAAh0hng");
	var mask_3_graphics_13 = new cjs.Graphics().p("EAfKAibQh5hrAAiYQAAiZB5hsQB6hsCrAAQCrAAB5BsQB6BsAACZQAACYh6BrQh5BtirAAQirAAh6htg");
	var mask_3_graphics_14 = new cjs.Graphics().p("EAe/AieQiAhyAAigQAAigCAhzQCBhxC1AAQC1AAB/BxQCBBzAACgQAACgiBByQh/Byi1AAQi1AAiBhyg");
	var mask_3_graphics_15 = new cjs.Graphics().p("EAe0AigQiHh3AAipQAAioCHh4QCIh3C/AAQC+AACHB3QCIB4AACoQAACpiIB3QiHB4i+AAQi/AAiIh4g");
	var mask_3_graphics_16 = new cjs.Graphics().p("EAfVAidQiNhzAAijQAAikCNh0QCPhzDJAAQDIAACOBzQCPB0AACkQAACjiPBzQiOB1jIAAQjJAAiPh1g");
	var mask_3_graphics_17 = new cjs.Graphics().p("EAf2AibQiUhwAAieQAAieCUhxQCXhwDSAAQDSAACVBwQCWBxAACeQAACeiWBwQiVBwjSAAQjSAAiXhwg");
	var mask_3_graphics_18 = new cjs.Graphics().p("EAgYAiYQichsAAiZQAAiZCchtQCdhsDcAAQDcAACcBsQCdBtAACZQAACZidBsQicBtjcAAQjcAAidhtg");
	var mask_3_graphics_19 = new cjs.Graphics().p("EAg5AiVQiihoAAiTQAAiUCihqQCkhoDmAAQDnAACiBoQCkBqAACUQAACTikBoQiiBqjnAAQjmAAikhqg");
	var mask_3_graphics_20 = new cjs.Graphics().p("EAhaAiTQiphlAAiOQAAiPCphlQCrhlDxAAQDwAACpBlQCrBlAACPQAACOirBlQipBljwAAQjxAAirhlg");
	var mask_3_graphics_21 = new cjs.Graphics().p("EAh8AiQQixhhAAiJQAAiJCxhiQCyhhD6AAQD6AACwBhQCyBiAACJQAACJiyBhQiwBij6AAQj6AAiyhig");
	var mask_3_graphics_22 = new cjs.Graphics().p("EAidAiOQi3heAAiEQAAiEC3heQC5hdEEAAQEEAAC3BdQC5BeAACEQAACEi5BeQi3BekEAAQkEAAi5heg");
	var mask_3_graphics_23 = new cjs.Graphics().p("EAi+AiLQi+hZAAh/QAAh/C+hbQDAhZEOAAQEOAAC+BZQDABbAAB/QAAB/jABZQi+BbkOAAQkOAAjAhbg");
	var mask_3_graphics_24 = new cjs.Graphics().p("EAjfAiIQjFhVAAh6QAAh6DFhWQDIhWEXAAQEYAADFBWQDIBWAAB6QAAB6jIBVQjFBXkYAAQkXAAjIhXg");
	var mask_3_graphics_25 = new cjs.Graphics().p("EAjNAiVQjUhVAAh6QAAh5DUhWQDVhWErAAQErAADTBWQDWBWAAB5QAAB6jWBVQjTBXkrAAQkrAAjVhXg");
	var mask_3_graphics_26 = new cjs.Graphics().p("EAi6AiiQjhhVAAh5QAAh5DhhWQDjhVE/AAQE/AADhBVQDjBWAAB5QAAB5jjBVQjhBWk/AAQk/AAjjhWg");
	var mask_3_graphics_27 = new cjs.Graphics().p("EAinAivQjvhVAAh4QAAh5DvhVQDxhVFTAAQFSAADvBVQDxBVAAB5QAAB4jxBVQjvBVlSAAQlTAAjxhVg");
	var mask_3_graphics_28 = new cjs.Graphics().p("EAiUAi7Qj9hUAAh4QAAh4D9hVQD/hVFmAAQFmAAD9BVQD/BVAAB4QAAB4j/BUQj9BWlmAAQlmAAj/hWg");
	var mask_3_graphics_29 = new cjs.Graphics().p("EAiBAjIQkLhUAAh3QAAh4ELhVQENhUF6AAQF6AAEKBUQEOBVAAB4QAAB3kOBUQkKBVl6AAQl6AAkNhVg");
	var mask_3_graphics_30 = new cjs.Graphics().p("EAhuAjVQkYhUAAh3QAAh3EYhUQEbhUGOAAQGNAAEYBUQEcBUAAB3QAAB3kcBUQkYBUmNAAQmOAAkbhUg");
	var mask_3_graphics_31 = new cjs.Graphics().p("EAhbAjhQkmhTAAh2QAAh3EmhUQEphUGhAAQGhAAEnBUQEpBUAAB3QAAB2kpBTQknBVmhAAQmhAAkphVg");
	var mask_3_graphics_32 = new cjs.Graphics().p("EAhIAjuQk0hTAAh2QAAh2E0hUQE4hTG0AAQG1AAE0BTQE3BUAAB2QAAB2k3BTQk0BUm1AAQm0AAk4hUg");
	var mask_3_graphics_33 = new cjs.Graphics().p("EAg1Aj7QlChTAAh1QAAh2FChTQFGhTHIAAQHIAAFCBTQFFBTAAB2QAAB1lFBTQlCBTnIAAQnIAAlGhTg");
	var mask_3_graphics_34 = new cjs.Graphics().p("EAj6AiOQkfhQAAhyQAAhxEfhRQEihQGXAAQGXAAEfBQQEiBRAABxQAABykiBQQkfBRmXAAQmXAAkihRg");
	var mask_3_graphics_35 = new cjs.Graphics().p("EAm/AghQj8hNAAhuQAAhuD8hOQD/hOFlAAQFmAAD8BOQD/BOAABuQAABuj/BNQj8BPlmAAQllAAj/hPg");
	var mask_3_graphics_36 = new cjs.Graphics().p("EAqEAe1QjZhLAAhqQAAhqDZhMQDchLE0AAQEzAADaBLQDbBMAABqQAABqjbBLQjaBLkzAAQk0AAjchLg");
	var mask_3_graphics_37 = new cjs.Graphics().p("EAtJAdIQi2hIAAhmQAAhnC2hJQC4hIEDAAQECAAC3BIQC4BJAABnQAABmi4BIQi3BJkCAAQkDAAi4hJg");
	var mask_3_graphics_38 = new cjs.Graphics().p("EAuJAdOQizhRAAhyQAAhyCzhSQC2hQD/AAQD+AAC0BQQC2BSAAByQAAByi2BRQi0BRj+AAQj/AAi2hRg");
	var mask_3_graphics_39 = new cjs.Graphics().p("EAvJAdTQixhZAAh+QAAh+CxhaQCzhZD7AAQD7AACxBZQCzBaAAB+QAAB+izBZQixBaj7AAQj7AAizhag");
	var mask_3_graphics_40 = new cjs.Graphics().p("EAwKAdZQivhiAAiJQAAiKCvhjQCwhhD3AAQD3AACvBhQCwBjAACKQAACJiwBiQivBij3AAQj3AAiwhig");
	var mask_3_graphics_41 = new cjs.Graphics().p("EAxKAdeQishpAAiWQAAiWCshrQCthpD0AAQDzAACsBpQCuBrAACWQAACWiuBpQisBrjzAAQj0AAithrg");
	var mask_3_graphics_42 = new cjs.Graphics().p("EAyKAdkQiphyAAiiQAAihCph0QCrhyDwAAQDvAACpByQCrB0AAChQAACiirByQipBzjvAAQjwAAirhzg");
	var mask_3_graphics_43 = new cjs.Graphics().p("EAzKAdpQimh6AAitQAAiuCmh8QCoh6DsAAQDsAACnB6QCoB8AACuQAACtioB6QinB8jsAAQjsAAioh8g");
	var mask_3_graphics_44 = new cjs.Graphics().p("EA0KAdvQikiDAAi5QAAi5CkiFQCmiCDoAAQDoAACkCCQCmCFAAC5QAAC5imCDQikCEjoAAQjoAAimiEg");
	var mask_3_graphics_45 = new cjs.Graphics().p("EA1KAd1QihiLAAjGQAAjFChiNQCjiLDlAAQDkAAChCLQCjCNAADFQAADGijCLQihCMjkAAQjlAAijiMg");
	var mask_3_graphics_46 = new cjs.Graphics().p("EA2LAd6QifiTAAjRQAAjRCfiWQCgiTDhAAQDgAACfCTQCgCWAADRQAADRigCTQifCVjgAAQjhAAigiVg");
	var mask_3_graphics_47 = new cjs.Graphics().p("EA3LAeAQicicAAjdQAAjdCcieQCdibDdAAQDdAACcCbQCeCeAADdQAADdieCcQicCdjdAAQjdAAididg");
	var mask_3_graphics_48 = new cjs.Graphics().p("EA39AfqQimimAAjsQAAjsCmioQCpimDrAAQDsAACnCmQCoCoAADsQAADsioCmQinCojsAAQjrAAipiog");
	var mask_3_graphics_49 = new cjs.Graphics().p("EA4wAhUQixiwAAj7QAAj7CxizQCziwD7AAQD6AACxCwQCzCzAAD7QAAD7izCwQixCzj6AAQj7AAizizg");
	var mask_3_graphics_50 = new cjs.Graphics().p("EA5jAi/Qi8i8AAkJQAAkKC8i9QC9i7EKAAQEJAAC8C7QC9C9AAEKQAAEJi9C8Qi8C9kJAAQkKAAi9i9g");
	var mask_3_graphics_51 = new cjs.Graphics().p("EA6VAkpQjGjGAAkYQAAkZDGjIQDIjFEZAAQEYAADGDFQDIDIAAEZQAAEYjIDGQjGDIkYAAQkZAAjIjIg");
	var mask_3_graphics_52 = new cjs.Graphics().p("EA7IAmUQjQjRAAknQAAknDQjTQDTjQEnAAQEnAADRDQQDSDTAAEnQAAEnjSDRQjRDSknAAQknAAjTjSg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:mask_3_graphics_0,x:216.6497,y:232.9747}).wait(1).to({graphics:mask_3_graphics_1,x:222.6321,y:231.3111}).wait(1).to({graphics:mask_3_graphics_2,x:228.6144,y:229.6475}).wait(1).to({graphics:mask_3_graphics_3,x:234.5967,y:227.9839}).wait(1).to({graphics:mask_3_graphics_4,x:240.579,y:226.3202}).wait(1).to({graphics:mask_3_graphics_5,x:246.5613,y:224.6566}).wait(1).to({graphics:mask_3_graphics_6,x:249.5017,y:225.4722}).wait(1).to({graphics:mask_3_graphics_7,x:252.4421,y:226.2879}).wait(1).to({graphics:mask_3_graphics_8,x:255.3825,y:227.1035}).wait(1).to({graphics:mask_3_graphics_9,x:258.3229,y:227.9191}).wait(1).to({graphics:mask_3_graphics_10,x:261.2633,y:228.7347}).wait(1).to({graphics:mask_3_graphics_11,x:264.2037,y:229.5503}).wait(1).to({graphics:mask_3_graphics_12,x:267.1442,y:230.366}).wait(1).to({graphics:mask_3_graphics_13,x:270.0846,y:231.1816}).wait(1).to({graphics:mask_3_graphics_14,x:273.025,y:231.9972}).wait(1).to({graphics:mask_3_graphics_15,x:275.9654,y:232.8128}).wait(1).to({graphics:mask_3_graphics_16,x:283.3749,y:232.18}).wait(1).to({graphics:mask_3_graphics_17,x:290.7844,y:231.5472}).wait(1).to({graphics:mask_3_graphics_18,x:298.1939,y:230.9144}).wait(1).to({graphics:mask_3_graphics_19,x:305.6034,y:230.2815}).wait(1).to({graphics:mask_3_graphics_20,x:313.0129,y:229.6487}).wait(1).to({graphics:mask_3_graphics_21,x:320.4224,y:229.0159}).wait(1).to({graphics:mask_3_graphics_22,x:327.8319,y:228.3831}).wait(1).to({graphics:mask_3_graphics_23,x:335.2414,y:227.7502}).wait(1).to({graphics:mask_3_graphics_24,x:342.6509,y:227.1174}).wait(1).to({graphics:mask_3_graphics_25,x:348.8711,y:228.3544}).wait(1).to({graphics:mask_3_graphics_26,x:355.0913,y:229.5913}).wait(1).to({graphics:mask_3_graphics_27,x:361.3115,y:230.8283}).wait(1).to({graphics:mask_3_graphics_28,x:367.5317,y:232.0652}).wait(1).to({graphics:mask_3_graphics_29,x:373.7519,y:233.3022}).wait(1).to({graphics:mask_3_graphics_30,x:379.9721,y:234.5391}).wait(1).to({graphics:mask_3_graphics_31,x:386.1923,y:235.7761}).wait(1).to({graphics:mask_3_graphics_32,x:392.4124,y:237.0131}).wait(1).to({graphics:mask_3_graphics_33,x:398.6326,y:238.25}).wait(1).to({graphics:mask_3_graphics_34,x:397.8957,y:227.1124}).wait(1).to({graphics:mask_3_graphics_35,x:397.1588,y:215.9747}).wait(1).to({graphics:mask_3_graphics_36,x:396.4219,y:204.837}).wait(1).to({graphics:mask_3_graphics_37,x:395.6849,y:193.6994}).wait(1).to({graphics:mask_3_graphics_38,x:400.5529,y:195.1034}).wait(1).to({graphics:mask_3_graphics_39,x:405.4209,y:196.5074}).wait(1).to({graphics:mask_3_graphics_40,x:410.2888,y:197.9114}).wait(1).to({graphics:mask_3_graphics_41,x:415.1568,y:199.3155}).wait(1).to({graphics:mask_3_graphics_42,x:420.0248,y:200.7195}).wait(1).to({graphics:mask_3_graphics_43,x:424.8927,y:202.1235}).wait(1).to({graphics:mask_3_graphics_44,x:429.7607,y:203.5275}).wait(1).to({graphics:mask_3_graphics_45,x:434.6287,y:204.9316}).wait(1).to({graphics:mask_3_graphics_46,x:439.4967,y:206.3356}).wait(1).to({graphics:mask_3_graphics_47,x:444.3646,y:207.7396}).wait(1).to({graphics:mask_3_graphics_48,x:455.5742,y:219.4342}).wait(1).to({graphics:mask_3_graphics_49,x:466.7837,y:231.1287}).wait(1).to({graphics:mask_3_graphics_50,x:477.9932,y:242.8232}).wait(1).to({graphics:mask_3_graphics_51,x:489.2028,y:254.5178}).wait(1).to({graphics:mask_3_graphics_52,x:500.4123,y:266.2123}).wait(1));

	// цирк
	this.instance_4 = new lib.CachedBmp_250();
	this.instance_4.setTransform(427.65,311.4,0.5,0.5);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(53));

	// Слой_18 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_0 = new cjs.Graphics().p("EAJbApiIAAgiMA15AAAIAAAig");
	var mask_4_graphics_1 = new cjs.Graphics().p("EAJbApzIAAguMA15AAAIAAAug");
	var mask_4_graphics_2 = new cjs.Graphics().p("EAJbAqFIAAg7MA15AAAIAAA7g");
	var mask_4_graphics_3 = new cjs.Graphics().p("EAJbAqWIAAhGMA15AAAIAABGg");
	var mask_4_graphics_4 = new cjs.Graphics().p("EAJbAqnIAAhSMA15AAAIAABSg");
	var mask_4_graphics_5 = new cjs.Graphics().p("EAJbAq5IAAhfMA15AAAIAABfg");
	var mask_4_graphics_6 = new cjs.Graphics().p("EAJbArKIAAhrMA15AAAIAABrg");
	var mask_4_graphics_7 = new cjs.Graphics().p("EAJbArcIAAh4MA15AAAIAAB4g");
	var mask_4_graphics_8 = new cjs.Graphics().p("EAJbArtIAAiEMA15AAAIAACEg");
	var mask_4_graphics_9 = new cjs.Graphics().p("EAJbAr+IAAiPMA15AAAIAACPg");
	var mask_4_graphics_10 = new cjs.Graphics().p("EAJbAsQIAAicMA15AAAIAACcg");
	var mask_4_graphics_11 = new cjs.Graphics().p("EAJbAshIAAioMA15AAAIAACog");
	var mask_4_graphics_12 = new cjs.Graphics().p("EAJbAsMIAAiZMA15AAAIAACZg");
	var mask_4_graphics_13 = new cjs.Graphics().p("EAJbAr3IAAiLMA15AAAIAACLg");
	var mask_4_graphics_14 = new cjs.Graphics().p("EAJbAriIAAh8MA15AAAIAAB8g");
	var mask_4_graphics_15 = new cjs.Graphics().p("EAJbArNIAAhtMA15AAAIAABtg");
	var mask_4_graphics_16 = new cjs.Graphics().p("EAJbAq3IAAhdMA15AAAIAABdg");
	var mask_4_graphics_17 = new cjs.Graphics().p("EAJbAqiIAAhPMA15AAAIAABPg");
	var mask_4_graphics_18 = new cjs.Graphics().p("EAJbAqNIAAhAMA15AAAIAABAg");
	var mask_4_graphics_19 = new cjs.Graphics().p("EAJbAp4IAAgxMA15AAAIAAAxg");
	var mask_4_graphics_20 = new cjs.Graphics().p("EAJbApjIAAgjMA15AAAIAAAjg");
	var mask_4_graphics_21 = new cjs.Graphics().p("EAJbApxIAAgoMA15AAAIAAAog");
	var mask_4_graphics_22 = new cjs.Graphics().p("EAJbAqAIAAguMA15AAAIAAAug");
	var mask_4_graphics_23 = new cjs.Graphics().p("EAJbAqOIAAgzMA15AAAIAAAzg");
	var mask_4_graphics_24 = new cjs.Graphics().p("EAJbAqcIAAg4MA15AAAIAAA4g");
	var mask_4_graphics_25 = new cjs.Graphics().p("EAJbAqrIAAg/MA15AAAIAAA/g");
	var mask_4_graphics_26 = new cjs.Graphics().p("EAJbAq5IAAhEMA15AAAIAABEg");
	var mask_4_graphics_27 = new cjs.Graphics().p("EAJbArHIAAhJMA15AAAIAABJg");
	var mask_4_graphics_28 = new cjs.Graphics().p("EAJbArWIAAhPMA15AAAIAABPg");
	var mask_4_graphics_29 = new cjs.Graphics().p("EAJbArkIAAhVMA15AAAIAABVg");
	var mask_4_graphics_30 = new cjs.Graphics().p("EAJbAryIAAhaMA15AAAIAABag");
	var mask_4_graphics_31 = new cjs.Graphics().p("EAJbAsAIAAhfMA15AAAIAABfg");
	var mask_4_graphics_32 = new cjs.Graphics().p("EAJbAsPIAAhlMA15AAAIAABlg");
	var mask_4_graphics_33 = new cjs.Graphics().p("EAJbAsdIAAhqMA15AAAIAABqg");
	var mask_4_graphics_34 = new cjs.Graphics().p("EAJbAsWIAAhwMA16AAAIAABwg");
	var mask_4_graphics_35 = new cjs.Graphics().p("EAJcAsPIAAh2MA15AAAIAAB2g");
	var mask_4_graphics_36 = new cjs.Graphics().p("EAJcAsHIAAh7MA15AAAIAAB7g");
	var mask_4_graphics_37 = new cjs.Graphics().p("EAJcAsAIAAiAMA16AAAIAACAg");
	var mask_4_graphics_38 = new cjs.Graphics().p("EAJdAr5IAAiGMA15AAAIAACGg");
	var mask_4_graphics_39 = new cjs.Graphics().p("EAJdArxIAAiLMA16AAAIAACLg");
	var mask_4_graphics_40 = new cjs.Graphics().p("EAJeArqIAAiQMA15AAAIAACQg");
	var mask_4_graphics_41 = new cjs.Graphics().p("EAJeArjIAAiWMA16AAAIAACWg");
	var mask_4_graphics_42 = new cjs.Graphics().p("EAJeArbIAAibMA16AAAIAACbg");
	var mask_4_graphics_43 = new cjs.Graphics().p("EAJfArUIAAigMA15AAAIAACgg");
	var mask_4_graphics_44 = new cjs.Graphics().p("EAJfArNIAAimMA16AAAIAACmg");
	var mask_4_graphics_45 = new cjs.Graphics().p("EAJgArGIAAisMA15AAAIAACsg");
	var mask_4_graphics_46 = new cjs.Graphics().p("EAJgAq+IAAiwMA16AAAIAACwg");
	var mask_4_graphics_47 = new cjs.Graphics().p("EAJgAq3IAAi2MA16AAAIAAC2g");
	var mask_4_graphics_48 = new cjs.Graphics().p("EAJhAqwIAAi8MA15AAAIAAC8g");
	var mask_4_graphics_49 = new cjs.Graphics().p("EAJhAqoIAAjAMA16AAAIAADAg");
	var mask_4_graphics_50 = new cjs.Graphics().p("EAJiAqhIAAjGMA15AAAIAADGg");
	var mask_4_graphics_51 = new cjs.Graphics().p("EAJiAqaIAAjMMA16AAAIAADMg");
	var mask_4_graphics_52 = new cjs.Graphics().p("EAJiAqSIAAjRMA16AAAIAADRg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:mask_4_graphics_0,x:405.225,y:265.8}).wait(1).to({graphics:mask_4_graphics_1,x:405.225,y:267.5367}).wait(1).to({graphics:mask_4_graphics_2,x:405.225,y:269.2734}).wait(1).to({graphics:mask_4_graphics_3,x:405.225,y:271.0101}).wait(1).to({graphics:mask_4_graphics_4,x:405.225,y:272.7469}).wait(1).to({graphics:mask_4_graphics_5,x:405.225,y:274.4836}).wait(1).to({graphics:mask_4_graphics_6,x:405.225,y:276.2203}).wait(1).to({graphics:mask_4_graphics_7,x:405.225,y:277.957}).wait(1).to({graphics:mask_4_graphics_8,x:405.225,y:279.6937}).wait(1).to({graphics:mask_4_graphics_9,x:405.225,y:281.4304}).wait(1).to({graphics:mask_4_graphics_10,x:405.225,y:283.1671}).wait(1).to({graphics:mask_4_graphics_11,x:405.225,y:284.9039}).wait(1).to({graphics:mask_4_graphics_12,x:405.225,y:282.7907}).wait(1).to({graphics:mask_4_graphics_13,x:405.225,y:280.6776}).wait(1).to({graphics:mask_4_graphics_14,x:405.225,y:278.5645}).wait(1).to({graphics:mask_4_graphics_15,x:405.225,y:276.4513}).wait(1).to({graphics:mask_4_graphics_16,x:405.225,y:274.3382}).wait(1).to({graphics:mask_4_graphics_17,x:405.225,y:272.2251}).wait(1).to({graphics:mask_4_graphics_18,x:405.225,y:270.1119}).wait(1).to({graphics:mask_4_graphics_19,x:405.225,y:267.9988}).wait(1).to({graphics:mask_4_graphics_20,x:405.225,y:265.8857}).wait(1).to({graphics:mask_4_graphics_21,x:405.225,y:267.3188}).wait(1).to({graphics:mask_4_graphics_22,x:405.225,y:268.752}).wait(1).to({graphics:mask_4_graphics_23,x:405.225,y:270.1851}).wait(1).to({graphics:mask_4_graphics_24,x:405.225,y:271.6182}).wait(1).to({graphics:mask_4_graphics_25,x:405.225,y:273.0514}).wait(1).to({graphics:mask_4_graphics_26,x:405.225,y:274.4845}).wait(1).to({graphics:mask_4_graphics_27,x:405.225,y:275.9177}).wait(1).to({graphics:mask_4_graphics_28,x:405.225,y:277.3508}).wait(1).to({graphics:mask_4_graphics_29,x:405.225,y:278.7839}).wait(1).to({graphics:mask_4_graphics_30,x:405.225,y:280.2171}).wait(1).to({graphics:mask_4_graphics_31,x:405.225,y:281.6502}).wait(1).to({graphics:mask_4_graphics_32,x:405.225,y:283.0834}).wait(1).to({graphics:mask_4_graphics_33,x:405.225,y:284.5165}).wait(1).to({graphics:mask_4_graphics_34,x:405.2658,y:283.7867}).wait(1).to({graphics:mask_4_graphics_35,x:405.3066,y:283.0569}).wait(1).to({graphics:mask_4_graphics_36,x:405.3474,y:282.327}).wait(1).to({graphics:mask_4_graphics_37,x:405.3882,y:281.5972}).wait(1).to({graphics:mask_4_graphics_38,x:405.429,y:280.8674}).wait(1).to({graphics:mask_4_graphics_39,x:405.4697,y:280.1376}).wait(1).to({graphics:mask_4_graphics_40,x:405.5105,y:279.4078}).wait(1).to({graphics:mask_4_graphics_41,x:405.5513,y:278.678}).wait(1).to({graphics:mask_4_graphics_42,x:405.5921,y:277.9482}).wait(1).to({graphics:mask_4_graphics_43,x:405.6329,y:277.2183}).wait(1).to({graphics:mask_4_graphics_44,x:405.6737,y:276.4885}).wait(1).to({graphics:mask_4_graphics_45,x:405.7145,y:275.7587}).wait(1).to({graphics:mask_4_graphics_46,x:405.7553,y:275.0289}).wait(1).to({graphics:mask_4_graphics_47,x:405.7961,y:274.2991}).wait(1).to({graphics:mask_4_graphics_48,x:405.8368,y:273.5693}).wait(1).to({graphics:mask_4_graphics_49,x:405.8776,y:272.8395}).wait(1).to({graphics:mask_4_graphics_50,x:405.9184,y:272.1096}).wait(1).to({graphics:mask_4_graphics_51,x:405.9592,y:271.3798}).wait(1).to({graphics:mask_4_graphics_52,x:406,y:270.65}).wait(1));

	// белый_коминг_сон
	this.instance_5 = new lib.CachedBmp_251();
	this.instance_5.setTransform(474.95,534.75,0.5,0.5);

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(53));

	// Скоминг_сон
	this.instance_6 = new lib.CachedBmp_252();
	this.instance_6.setTransform(474.95,534.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(53));

	// OBJECTS
	this.instance_7 = new lib.CompoundPath_10();
	this.instance_7.setTransform(687.6,301.65,2.5599,1.8026,0,0,0,10.8,12.5);
	this.instance_7.shadow = new cjs.Shadow("rgba(158,56,0,0.298)",0,0,3);

	this.instance_8 = new lib.CompoundPath_1_2();
	this.instance_8.setTransform(639.35,301.75,2.5599,1.8026,0,0,0,12.1,12.1);
	this.instance_8.shadow = new cjs.Shadow("rgba(158,56,0,0.298)",0,0,3);

	this.instance_9 = new lib.CompoundPath_2_2();
	this.instance_9.setTransform(590.6,301.1,2.5599,1.8026,0,0,0,11.3,12.2);
	this.instance_9.shadow = new cjs.Shadow("rgba(158,56,0,0.298)",0,0,3);

	this.instance_10 = new lib.CompoundPath_3_1();
	this.instance_10.setTransform(774.65,344.2,2.5599,1.8026,0,0,0,11.2,12.1);
	this.instance_10.shadow = new cjs.Shadow("rgba(158,56,0,0.298)",0,0,3);

	this.instance_11 = new lib.CompoundPath_4_1();
	this.instance_11.setTransform(727.8,344.2,2.5599,1.8026,0,0,0,11.6,12.1);
	this.instance_11.shadow = new cjs.Shadow("rgba(158,56,0,0.298)",0,0,3);

	this.instance_12 = new lib.CompoundPath_5_1();
	this.instance_12.setTransform(688.25,344.2,2.5599,1.8026,0,0,0,7.7,12.1);
	this.instance_12.shadow = new cjs.Shadow("rgba(158,56,0,0.298)",0,0,3);

	this.instance_13 = new lib.CompoundPath_6_0();
	this.instance_13.setTransform(652.05,344.2,2.5599,1.8026,0,0,0,10.8,12.1);
	this.instance_13.shadow = new cjs.Shadow("rgba(158,56,0,0.298)",0,0,3);

	this.instance_14 = new lib.CompoundPath_7_0();
	this.instance_14.setTransform(608.15,344.2,2.5599,1.8026,0,0,0,12.4,12.1);
	this.instance_14.shadow = new cjs.Shadow("rgba(158,56,0,0.298)",0,0,3);

	this.instance_15 = new lib.CompoundPath_8();
	this.instance_15.setTransform(554.75,344.2,2.5599,1.8026,0,0,0,14.1,12.1);
	this.instance_15.shadow = new cjs.Shadow("rgba(158,56,0,0.298)",0,0,3);

	this.instance_16 = new lib.CompoundPath_9();
	this.instance_16.setTransform(501.75,344.2,2.5599,1.8026,0,0,0,12.1,12.1);
	this.instance_16.shadow = new cjs.Shadow("rgba(158,56,0,0.298)",0,0,3);

	this.instance_17 = new lib.CachedBmp_301();
	this.instance_17.setTransform(422.65,285.45,0.5,0.5);

	this.instance_18 = new lib.CachedBmp_257();
	this.instance_18.setTransform(527.3,584.65,0.5,0.5);

	this.instance_19 = new lib.CachedBmp_256();
	this.instance_19.setTransform(130.9,215.45,0.5,0.5);

	this.instance_20 = new lib.CompoundPath_1_0();
	this.instance_20.setTransform(639.55,446.25,2.5597,1.8026,0,0,0,209.3,138.7);
	this.instance_20.shadow = new cjs.Shadow("rgba(255,182,0,1)",0,0,9);

	this.instance_21 = new lib.CompoundPath_2_0();
	this.instance_21.setTransform(639.55,446.25,2.5597,1.8026,0,0,0,209.3,138.7);
	this.instance_21.shadow = new cjs.Shadow("rgba(255,182,0,1)",0,0,9);

	this.instance_22 = new lib.CompoundPath_3();
	this.instance_22.setTransform(639.55,446.25,2.5597,1.8026,0,0,0,209.3,138.7);
	this.instance_22.shadow = new cjs.Shadow("rgba(255,182,0,1)",0,0,9);

	this.instance_23 = new lib.CompoundPath_4();
	this.instance_23.setTransform(639.55,446.25,2.5597,1.8026,0,0,0,209.3,138.7);
	this.instance_23.shadow = new cjs.Shadow("rgba(255,182,0,1)",0,0,9);

	this.instance_24 = new lib.CompoundPath_5();
	this.instance_24.setTransform(639,447.05,2.5597,1.8026,0,0,0,200.1,129.3);
	this.instance_24.compositeOperation = "multiply";

	this.instance_25 = new lib.CachedBmp_255();
	this.instance_25.setTransform(117.35,205.9,0.5,0.5);

	this.instance_26 = new lib.CompoundPath_1();
	this.instance_26.setTransform(639.85,446.4,2.5599,1.8026,0,0,0,207.4,137.2);
	this.instance_26.shadow = new cjs.Shadow("rgba(61,1,1,0.4)",3,1,9);

	this.instance_27 = new lib.CompoundPath_2();
	this.instance_27.setTransform(639.9,446.85,2.5599,1.8026,0,0,0,178.3,117);
	this.instance_27.alpha = 0.1992;
	this.instance_27.compositeOperation = "multiply";

	this.instance_28 = new lib.CachedBmp_254();
	this.instance_28.setTransform(145.65,226.9,0.5,0.5);

	this.instance_29 = new lib.Group_2();
	this.instance_29.setTransform(640,84.45,2.5599,1.8026,0,0,0,127.8,36.5);
	this.instance_29.compositeOperation = "overlay";

	this.instance_30 = new lib.CachedBmp_300();
	this.instance_30.setTransform(185.55,19.7,0.5,0.5);

	this.instance_31 = new lib.CompoundPath();
	this.instance_31.setTransform(639.8,114.7,2.5597,1.8026,0,0,0,113.7,42.5);
	this.instance_31.alpha = 0.1992;
	this.instance_31.compositeOperation = "multiply";

	this.instance_32 = new lib.Path();
	this.instance_32.setTransform(639.75,446.4,2.5599,1.8026,0,0,0,181.8,181.8);
	this.instance_32.alpha = 0.3008;
	this.instance_32.compositeOperation = "overlay";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7}]}).wait(53));

	// BACKGROUND
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#7E1D39","#751B3A","#5D153B","#370C3E","#360C3E"],[0,0.216,0.561,0.992,1],0,0,0,0,0,347.7).s().p("EgnDAnEMAAAhOHMBOHAAAMAAABOHg");
	this.shape.setTransform(640.0065,396.5531,2.6162,1.8026);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(53));

	// stageBackground
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("Ehljg5zMDLHAAAMAAABznMjLHAAAg");
	this.shape_1.setTransform(640,360);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("EhljA50MAAAhznMDLHAAAMAAABzng");
	this.shape_2.setTransform(640,360);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(53));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(626,305.9,668.0999999999999,541.3000000000001);
// library properties:
lib.properties = {
	id: '097549A9F0E52744AE4D88928E9DF65B',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_264.png", id:"CachedBmp_264"},
		{src:"images/CachedBmp_263.png", id:"CachedBmp_263"},
		{src:"images/CachedBmp_262.png", id:"CachedBmp_262"},
		{src:"images/CachedBmp_259.png", id:"CachedBmp_259"},
		{src:"images/CachedBmp_301.png", id:"CachedBmp_301"},
		{src:"images/CachedBmp_257.png", id:"CachedBmp_257"},
		{src:"images/CachedBmp_256.png", id:"CachedBmp_256"},
		{src:"images/CachedBmp_255.png", id:"CachedBmp_255"},
		{src:"images/CachedBmp_254.png", id:"CachedBmp_254"},
		{src:"images/CachedBmp_300.png", id:"CachedBmp_300"},
		{src:"images/CachedBmp_252.png", id:"CachedBmp_252"},
		{src:"images/CachedBmp_251.png", id:"CachedBmp_251"},
		{src:"images/CachedBmp_250.png", id:"CachedBmp_250"},
		{src:"images/CachedBmp_249.png", id:"CachedBmp_249"},
		{src:"images/CachedBmp_248.png", id:"CachedBmp_248"},
		{src:"images/CachedBmp_247.png", id:"CachedBmp_247"},
		{src:"images/CachedBmp_246.png", id:"CachedBmp_246"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['097549A9F0E52744AE4D88928E9DF65B'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;