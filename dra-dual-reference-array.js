/*!
 * DRA - DUAL REFERENCE ARRAY
 * Makes a array's value available through a objects's property, in the same array
 * Author: Jorge Feldmann (jotafeldmann) <https://github.com/jotafeldmann>
 * Docs and examples: https://github.com/jotafeldmann/dra-dual-reference-array
 * 2013 Jorge Feldmann (jotafeldmann) 
 * MIT Licensed
 */

'use strict';

 /**
 	Sandbox IIF pattern to expose the app
 	@param {object} objContext : the context to expose the app
 	@param {string} strNamespace : the name to insert in the context
 	@return {object}
 **/

 ( function ( objContext ,  strNamespace ) {

 	function app () {

 		/**
 		 * DualReferenceArray makes a array's value available through a objects's property, in the same array
 		 * @param {array} DualReferenceArray
 		 * @param {string} strPropertyNameToUseLikeAObjectProperty
 		 * @return {array}
 		 */
 		function DualReferenceArray ( arrArrayToCreateDualReferenceArray , strPropertyNameToUseLikeAObjectProperty ) {

		    // Comma-first FTW: I'm Sorry, If I Ever Hurt Your Feelings
		    var
		    	arrNewArrayToReturn = arrArrayToCreateDualReferenceArray
		    	, strTemplateToAvoidReservedWordsCollision = '_'
		    ;
    
		    for ( var count = 0 , q = arrNewArrayToReturn.length ; count < q ; count++ ) {
		    	arrNewArrayToReturn [
		    		strTemplateToAvoidReservedWordsCollision
		    		+ arrNewArrayToReturn [ count ] [ strPropertyNameToUseLikeAObjectProperty ]
		    	] = arrNewArrayToReturn [ count ];
		    }
		    
		    return arrNewArrayToReturn;
		    
		}
		
		// You can use the explicit method to achieve the same result and improve readability
		DualReferenceArray.convertPropsToObject = DualReferenceArray;

		return DualReferenceArray;

 	}

	function exposeNamespaceOnContext () {
		objContext = objContext || this;
		objContext [ strNamespace ] = app();
	}

 	function init () {
 		exposeNamespaceOnContext();
 	}

 	init();

 })( window , 'DRA' );
 // Now its available through window.DRA or just DRA
