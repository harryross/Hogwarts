namespace Hogwarts.Api.Helpers
{
	public class PropertyType
	{
		public static string GetType(string value)
		{
			var temp = value.Trim();

			// string
			var isString = (temp[0] == '\'') && (temp[temp.Length - 1] == '\'');
			if (isString)
			{
				return Type.String.ToString().ToLower();
			}
				
			// null
			if (temp == "null")
			{
				return Type.Null.ToString().ToLower();
			}

			// boolean
			if (temp == "true" || temp == "false")
			{
				return Type.Boolean.ToString().ToLower();
			}

			// integer
			int intResult;
			var isInteger = int.TryParse(temp, out intResult);
			if (isInteger)
			{
				return Type.Integer.ToString().ToLower();
			}

			// number
			float numResult;
			var isNumber = float.TryParse(temp, out numResult);
			if (isNumber)
			{
				return Type.Number.ToString().ToLower();
			}

			// array

			// object

			return Type.Unknown.ToString().ToLower();
		}

		private enum Type
		{
			Array,
			Boolean,
			Integer,
			Number,
			Null,
			Object,
			String,
			Unknown,
		}
	}
}